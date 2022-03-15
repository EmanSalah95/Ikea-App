import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import './searchStyle.js';
import { styles } from './searchStyle.js';
import SearchHeader from './searchHeader';
import SubCatSearch from './subCatSearch';
import HorizontalProducts from '../../components/HorizontalProducts/HorizontalProducts.js';
import { getCollection } from '../../services/firebase.js';
import { useEffect, useState } from 'react';
import i18n from 'i18n-js';
import { useSelector } from 'react-redux';

export default function SearchPage({ navigation }) {
  const [products, setProducts] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [loader, setLoader] = useState(false);
  const user = useSelector((state) => state.user);

  const getProducts = () => {
    getCollection('Products', ['SalePrice', '>=', 0])
      .then(res => {
        setProducts(res);
      })
      .catch(err => console.log('error :', err));
  };

  const getSubCategories = async () => {
    getCollection('subCategory')
      .then(res => {
        setSubCategories(res);
      })
      .then(() => {
        setLoader(true);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getProducts();
    getSubCategories();
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <SearchHeader products={products} />

          {subCategories && loader && (
            <ScrollView horizontal>
              {subCategories.map(item => (
                <SubCatSearch
                  item={item}
                  navigation={navigation}
                  key={item.id}
                />
              ))}
            </ScrollView>
          )}

          {products && (
            <>
              <View style={styles.proShow}>
                <Text style={{ fontSize: 18, margin: 7, fontWeight: 'bold' }}>
                  {i18n.t('TopSellers')}
                </Text>
                <Text style={{ color: '#ccc', margin: 7, fontSize: 17 }}>
                  {i18n.t('ViewAll')}
                </Text>
              </View>
              <HorizontalProducts navigation={navigation} products={products} />
            </>
          )}
          <HorizontalProducts />
        </View>
        {user.id == '' &&
        <View
          style={{
            backgroundColor: '#F1EAF1',
            marginTop: 20,
            padding: 10,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 15 }}>
            {i18n.t('MakeTheMostOfIkea')}
          </Text>
          <Text style={{ color: 'gray', marginTop: 10, fontSize: 17 }}>
            {i18n.t('SignUpAdvice')}
          </Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('Sign')}
              style={styles.sign}
            >
              <Text>{i18n.t('SignUp')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login', {
                navigatedFromShoppingList: false,
              })}
              style={styles.login}
            >
              <Text style={{ color: 'white' }}>{i18n.t('Login')}</Text>
            </TouchableOpacity>
          </View>
        </View>
        }
      </ScrollView>
    </>
  );
}
