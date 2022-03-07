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
import { getDocumentByID } from '../../services/firebase';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  // address: yup.string().required(),
  // building: yup.string().required(),
  // gov: yup.string().required(),
});

export default function Checkout() {
  const [locations, setLocations] = useState();

  const [activeSections, setActiveSections] = useState([]);
  const [selectedValue, setSelectedValue] = useState();

  const [userLocations, setUserLocations] = useState([]);

  const purchasedItems = useSelector(state => state.cartProducts.cartProducts);
  const totalOrderPrice = useSelector(state => state.cartProducts.totalPrice);

  const handleAddressForm = values => {
    // !locationsExist && setLocationsExist(true);
    const newLocation = values;
    console.log(newLocation);
    setUserLocations([...userLocations, newLocation]);
    // console.log(localStorage.getItem('UID'));
    // setUserLocation(localStorage.getItem('UID'), newLocation);

    setSections([1]); // go to the second section
  };

  useEffect(() => {
    getDocumentByID('governorate', 'VZsmOmwYmRM8qL2TAnqR').then(data => {
      const newLocations = [];

      data.Governorates.forEach(d => {
        const obj = { label: d.Name, value: d };
        newLocations.push(obj);
      });
      setLocations(newLocations);
    });
  }, []);

  const CONTENT = [
    {
      title: 'Billing and Shipping Address',
      content: (
        <View>
          <Text>Billing Address</Text>

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
                  placeholder='Full Name'
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
                          setFieldValue('gov', value.Name);
                        }
                      }}
                      items={locations}
                      placeholder={{
                        label: 'Select Governorate',
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
                  placeholder='Address'
                />

                <TextInput
                  onChangeText={handleChange('building')}
                  value={values.building}
                  style={styles.input}
                  placeholder='Building Name/Apartment No./Floor No.'
                />

                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.continueBtnWrappper}
                >
                  <Text style={styles.continueBtn}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      ),
    },
    {
      title: ' Delivery Invoice',
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
                      {item.productData.ProductName} {item.productData.Name}
                    </Text>
                    <Text style={styles.dataText}>
                      <Text style={styles.strongText}>
                        EGP {item.productData.Price}
                      </Text>
                    </Text>
                  </View>
                </View>
                <Text style={{ ...styles.strongText, ...styles.dataText }}>
                  {/* <p>
                      <strong>
                        EGP {item.PurchasedAmount * item.productData.Price}
                      </strong>
                    </p> */}
                  EGP {item.PurchasedAmount * item.productData.Price}
                </Text>
              </View>
            );
          })}
          <Text style={{ ...styles.totalPriceText, ...styles.dataText }}>
            Order Total:
            <Text style={styles.strongText}> EGP {totalOrderPrice}</Text>
          </Text>

          <TouchableOpacity
            onPress={() => {
              setSections([2]);
            }}
            style={styles.continueBtnWrappper}
          >
            <Text style={styles.continueBtn}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      ),
    },
    {
      title: 'Billing and Shipping Address',
      content: (
        <View>
          <Text>Billing Address</Text>
          <View style={styles.formWrapper}>
            <TextInput style={styles.input} placeholder='Full Name' />
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
    setSections([1]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
