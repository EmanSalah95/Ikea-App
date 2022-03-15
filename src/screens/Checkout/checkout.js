import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { styles } from './styles';

import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import RNPickerSelect from 'react-native-picker-select';
import {
  getDocumentByID,
  removeCartItemFromUser,
} from '../../services/firebase';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import ButtonsGroup from './buttonsGroup';

import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Collapsible from 'react-native-collapsible';
import { setUserLocation } from './../../services/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { fireStore } from '../../config/firebaseConfig';
import Pay from './pay';
import {
  removeFromCart,
  setCartItemAmount,
} from '../../store/actions/cartProducts';
import i18n from 'i18n-js';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  address: yup.string().required(),
  building: yup.string().required(),
  gov: yup.string().required(),
});

export default function Checkout({}) {
  const [locations, setLocations] = useState();

  const [activeSections, setActiveSections] = useState([]);
  const [selectedValue, setSelectedValue] = useState();

  const [userLocations, setUserLocations] = useState([]);

  const [checkedAddress, setCheckedAddress] = useState(0);
  const [addressCollapse, setAddressCollapse] = useState(true);

  const [locationsExist, setLocationsExist] = useState();

  const user = useSelector(state => state.user.user);
  const purchasedItems = useSelector(state => state.cartProducts.cartProducts);
  const totalOrderPrice = useSelector(state => state.cartProducts.totalPrice);
  const dispatch = useDispatch();

  const [continuePayment, setContinuePayment] = useState(false);
  const [orderIsPlaced, setOrderIsPlaced] = useState(false);

  const handleAddressForm = async values => {
    setLocationsExist(true);

    const newLocation = values;

    setUserLocations([newLocation, ...userLocations]);

    const uid = await AsyncStorage.getItem('UID');
    setUserLocation(uid, newLocation);

    setSections([1]); // go to the second section
  };

  useEffect(() => {
    setCheckedAddress(0);
    setAddressCollapse(true);
  }, [userLocations]);

  useEffect(() => {
    getDocumentByID('governorate', 'VZsmOmwYmRM8qL2TAnqR').then(data => {
      const newLocations = [];

      data.Governorates.forEach(d => {
        const obj = {
          label: i18n.locale == 'en' ? d.Name : d.NameAr,
          value: d,
        };
        newLocations.push(obj);
      });
      setLocations(newLocations);
    });
  }, []);

  useEffect(async () => {
    const uid = await AsyncStorage.getItem('UID');

    //////////////////////////////////////////////////////////////////
    // I couldn't use onSnapshot in firebase.js so I had to use it here
    //////////////////////////////////////////////////////////////////
    onSnapshot(doc(fireStore, 'users', uid), userDoc => {
      const userLoc = userDoc.data().Locations;
      userLoc && userLoc?.length !== 0
        ? setLocationsExist(true)
        : setLocationsExist(false);

      if (userLoc instanceof Array && userLoc?.length !== 0) {
        setUserLocations([...userLoc]);
      }
    });
  }, []);

  const [message, setMessage] = useState('');
  const [itemsRemoved, setItemsRemoved] = useState([]);

  useEffect(async () => {
    const uid = await AsyncStorage.getItem('UID');

    let removed = [];
    purchasedItems.forEach((item, indx) => {
      getDocumentByID('Products', item.id).then(res => {
        if (Number(res.Quantity) < item.PurchasedAmount) {
          removeCartItemFromUser(uid, item.id);
          dispatch(removeFromCart(item.id));
          dispatch(setCartItemAmount(item.id, 0));
          removed.push(item);
        }
        if (indx === purchasedItems.length - 1 && removed.length != 0) {
          setMessage(i18n.t('UnavailableMessage'));
          setItemsRemoved(removed);
        }
      });
    });
  }, []);

  const CONTENT = [
    {
      title: i18n.t('BillingShippingAddress'),
      content: (
        <View>
          <Text>{i18n.t('BillingAddress')}</Text>

          {userLocations.length !== 0 ? (
            <>
              <RadioButton.Group
                onValueChange={newValue => {
                  setCheckedAddress(newValue);
                }}
                value={checkedAddress}
              >
                {userLocations.map(loc => (
                  <View
                    key={userLocations.indexOf(loc)}
                    style={styles.locationsWrapper}
                  >
                    <View style={styles.radioButtonsGroup}>
                      <RadioButton
                        value={userLocations.indexOf(loc)}
                        status={
                          user?.Locations?.indexOf(loc) === checkedAddress
                            ? 'checked'
                            : 'unchecked'
                        }
                        color='#0058a2'
                      />
                    </View>
                    <View>
                      <Text style={styles.dataText}>
                        <Text style={styles.strongText}>{i18n.t('Name')}:</Text>{' '}
                        {user.FirstName} {user.LastName}
                      </Text>
                      <Text style={styles.dataText}>
                        <Text style={styles.strongText}>
                          {i18n.t('Mobile')}:
                        </Text>{' '}
                        {user.PhoneNum}
                      </Text>
                      <Text style={styles.dataText}>
                        <Text style={styles.strongText}>
                          {i18n.t('Address')}:
                        </Text>{' '}
                        {loc.address}
                        {'\n'}
                        {loc.building}
                      </Text>
                    </View>
                  </View>
                ))}
              </RadioButton.Group>

              <TouchableOpacity
                style={styles.shippingAddressBtn}
                onPress={() => {
                  setAddressCollapse(!addressCollapse);
                }}
              >
                <Text style={styles.dataText}>{i18n.t('AddNewAddress')}</Text>
              </TouchableOpacity>

              <Collapsible collapsed={addressCollapse}>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    address: '',
                    building: '',
                    gov: '',
                  }}
                  onSubmit={(values, actions) => {
                    actions.resetForm();
                    handleAddressForm(values);
                  }}
                  validationSchema={schema}
                >
                  {({ handleChange, handleSubmit, setFieldValue, values }) => (
                    <View style={styles.formWrapper}>
                      <TextInput
                        onChangeText={handleChange('name')}
                        value={values.name}
                        style={styles.input}
                        placeholder={i18n.t('FullName')}
                      />
                      <TextInput
                        onChangeText={handleChange('email')}
                        value={values.email}
                        style={styles.input}
                        placeholder='sample1@sample.com'
                      />

                      <View style={styles.pickerWrapper}>
                        {locations && (
                          <RNPickerSelect
                            style={styles.quantityPicker}
                            onValueChange={value => {
                              if (
                                value !== selectedValue &&
                                value !== undefined
                              ) {
                                setSelectedValue(Number(value));
                                setFieldValue(
                                  'gov',
                                  i18n.locale == 'en'
                                    ? value.Name
                                    : value.NameAr
                                );
                              }
                            }}
                            items={locations}
                            placeholder={{
                              label: i18n.t('SelectGovernorate'),
                              value: selectedValue,
                            }}
                            placeholderTextColor='red'
                            value={selectedValue}
                          />
                        )}
                      </View>

                      <TextInput
                        onChangeText={handleChange('address')}
                        value={values.address}
                        style={styles.input}
                        placeholder={i18n.t('Address')}
                      />

                      <TextInput
                        onChangeText={handleChange('building')}
                        value={values.building}
                        style={styles.input}
                        placeholder={i18n.t('BuildingNoPlaceHolder')}
                      />

                      <TouchableOpacity
                        onPress={() => {
                          setSections([1]);
                          handleSubmit();
                        }}
                        style={styles.continueBtnWrappper}
                      >
                        <Text style={styles.continueBtn}>
                          {i18n.t('Submit')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </Formik>
              </Collapsible>
            </>
          ) : (
            <Formik
              initialValues={{
                name: '',
                email: '',
                address: '',
                building: '',
                gov: '',
              }}
              onSubmit={(values, actions) => {
                actions.resetForm();
                handleAddressForm(values);
              }}
              validationSchema={schema}
            >
              {({ handleChange, handleSubmit, setFieldValue, values }) => (
                <View style={styles.formWrapper}>
                  <TextInput
                    onChangeText={handleChange('name')}
                    value={values.name}
                    style={styles.input}
                    placeholder={i18n.t('FullName')}
                  />
                  <TextInput
                    onChangeText={handleChange('email')}
                    value={values.email}
                    style={styles.input}
                    placeholder='sample1@sample.com'
                  />

                  <View style={styles.pickerWrapper}>
                    {locations && (
                      <RNPickerSelect
                        style={styles.quantityPicker}
                        onValueChange={value => {
                          if (value !== selectedValue && value !== undefined) {
                            setSelectedValue(value);
                            setFieldValue(
                              'gov',
                              i18n.locale == 'en' ? value.Name : value.NameAr
                            );
                          }
                        }}
                        items={locations}
                        placeholder={{
                          label: i18n.t('SelectGovernorate'),
                          value: selectedValue,
                        }}
                        placeholderTextColor='red'
                        value={selectedValue}
                      />
                    )}
                  </View>

                  <TextInput
                    onChangeText={handleChange('address')}
                    value={values.address}
                    style={styles.input}
                    placeholder={i18n.t('Address')}
                  />

                  <TextInput
                    onChangeText={handleChange('building')}
                    value={values.building}
                    style={styles.input}
                    placeholder={i18n.t('BuildingNoPlaceHolder')}
                  />

                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.continueBtnWrappper}
                  >
                    <Text style={styles.continueBtn}>{i18n.t('Submit')}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          )}

          {addressCollapse && locationsExist && (
            <ButtonsGroup
              setSectionNext={() => setSections([1])}
              locationsExist={locationsExist}
            />
          )}
        </View>
      ),
    },
    {
      title: i18n.t('DeliveryInvoice'),
      content: (
        <View>
          {purchasedItems.map(item => {
            return (
              <View key={purchasedItems.indexOf(item)} style={styles.itemCard}>
                <View style={styles.productData}>
                  <Image
                    source={{ uri: item.productData.Images[0] }}
                    style={styles.imageCard}
                  />
                  <View style={styles.productDetails}>
                    <Text style={styles.dataText}>
                      <Text>{item.PurchasedAmount} x </Text>
                      <Text style={styles.strongText}>
                        {item.productData.ProductName}
                      </Text>
                    </Text>
                    <Text style={styles.dataText}>
                      {item.productData.ProductName}{' '}
                      {i18n.locale == 'en'
                        ? item.productData.Name
                        : item.productData.NameAr}
                    </Text>
                    <Text style={styles.dataText}>
                      <Text style={styles.strongText}>
                        {i18n.t('EGP')} {item.productData.Price}
                      </Text>
                    </Text>
                  </View>
                </View>
                <Text style={{ ...styles.strongText, ...styles.dataText }}>
                  {i18n.t('EGP')}{' '}
                  {item.PurchasedAmount * item.productData.Price}
                </Text>
              </View>
            );
          })}
          <Text style={{ ...styles.totalPriceText, ...styles.dataText }}>
            {i18n.t('OrderTotal')}:
            <Text style={styles.strongText}>
              {' '}
              {i18n.t('EGP')} {totalOrderPrice}
            </Text>
          </Text>

          {message !== '' && (
            <>
              <Text style={{ color: 'red' }}>{message}</Text>
              <View>
                {itemsRemoved.map(item => {
                  return (
                    <View key={item.id}>
                      <View style={styles.productData}>
                        <Image
                          source={{ uri: item.productData.Images[0] }}
                          style={styles.imageCard}
                        />
                        <View style={styles.productDetails}>
                          <Text style={styles.dataText}>
                            <Text>{item.PurchasedAmount} x </Text>
                            <Text style={styles.strongText}>
                              {item.productData.ProductName}
                            </Text>
                          </Text>
                          <Text style={styles.dataText}>
                            {item.productData.ProductName}{' '}
                            {i18n.locale == 'en'
                              ? item.productData.Name
                              : item.productData.NameAr}
                          </Text>
                          <Text style={styles.dataText}>
                            <Text style={styles.strongText}>
                              {i18n.t('EGP')} {item.productData.Price}
                            </Text>
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </>
          )}

          <ButtonsGroup
            setSectionPrev={() => setSections([0])}
            setSectionNext={() => setSections([2])}
            locationsExist={true}
          />
        </View>
      ),
    },
    {
      title: i18n.t('ReviewConfirm'),
      content: (
        <View>
          <View style={styles.reviewCardsWrapper}>
            <View style={styles.reviewCard}>
              <Text style={styles.dataText}>{i18n.t('BillingAddress')}</Text>

              <View style={styles.cardBody}>
                <Text style={styles.dataText}>
                  <Text style={styles.strongText}>{i18n.t('Name')}: </Text>{' '}
                  {user.FirstName} {user.LastName}
                </Text>
                <Text style={styles.dataText}>
                  <Text style={styles.strongText}>{i18n.t('Mobile')}: </Text>{' '}
                  {user.PhoneNum}
                </Text>
                <Text style={styles.dataText}>
                  <Text style={styles.strongText}>{i18n.t('Address')}: </Text>{' '}
                  {userLocations.length !== 0 &&
                    userLocations[checkedAddress].address}
                  {'\n'}
                  {userLocations.length !== 0 &&
                    userLocations[checkedAddress].building}
                </Text>
              </View>
            </View>
            <View style={styles.reviewCard}>
              <Text style={styles.dataText}>{i18n.t('ShippingAddress')}</Text>

              <View style={styles.cardBody}>
                <Text style={styles.dataText}>
                  <Text style={styles.strongText}>{i18n.t('Name')}: </Text>{' '}
                  {user.FirstName} {user.LastName}
                </Text>
                <Text style={styles.dataText}>
                  <Text style={styles.strongText}>{i18n.t('Mobile')}: </Text>{' '}
                  {user.PhoneNum}
                </Text>
                <Text style={styles.dataText}>
                  <Text style={styles.strongText}>{i18n.t('Address')}: </Text>{' '}
                  {userLocations.length !== 0 &&
                    userLocations[checkedAddress].address}
                  {'\n'}
                  {userLocations.length !== 0 &&
                    userLocations[checkedAddress].building}
                </Text>
              </View>
            </View>
            <View style={styles.reviewCard}>
              <Text style={styles.dataText}>{i18n.t('DeliveryDateTime')}</Text>

              <View style={styles.cardBody}>
                <Text style={styles.dataText}>
                  <Text style={styles.strongText}>
                    {i18n.t('DeliveryDate')}:
                  </Text>
                </Text>
                <Text style={styles.dataText}>
                  <Text style={styles.strongText}>
                    {i18n.t('DeliveryTime')}:
                  </Text>
                </Text>
                <Text style={styles.dataText}>
                  <Text style={styles.strongText}>
                    {i18n.t('AssemblyTime')}:
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.reviewButtons}>
            <ButtonsGroup
              setSectionPrev={() => setSections([1])}
              showPaypal={true}
              locationsExist={true}
              setContinuePayment={setContinuePayment}
            />

            {continuePayment && (
              <Pay
                checkedAddress={checkedAddress}
                resetSection={() => setSections([])}
                orderIsPlaced={orderIsPlaced}
                setOrderIsPlaced={setOrderIsPlaced}
              />
            )}
          </View>
        </View>
      ),
    },
  ];

  const SELECTORS = [
    { title: 'Billing Address', value: 0 },
    { title: 'Delivery Invoice', value: 1 },
    { title: 'Review and Confirm', value: 2 },
    { title: 'Reset all' },
  ];

  const setSections = sections => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[
          styles.header,
          isActive ? styles.activeHeader : styles.inactiveHeader,
        ]}
        transition='backgroundColor'
      >
        <Text
          style={[
            styles.headerText,
            isActive ? styles.activeHeaderText : styles.inactiveHeaderText,
          ]}
        >
          {section.title}
        </Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition='backgroundColor'
      >
        {section.content}
      </Animatable.View>
    );
  };

  useEffect(() => {
    setSections([0]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {orderIsPlaced && (
        <View style={styles.successfulOrderMessage}>
          <Text style={styles.successfulOrderText}>
            {i18n.t('SuccessfulOrder')}
          </Text>
        </View>
      )}
      <View style={styles.container}>
        <ScrollView>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={false}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
