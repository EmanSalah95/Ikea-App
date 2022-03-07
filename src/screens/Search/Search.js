import { Text, View ,FlatList,ScrollView,TouchableOpacity} from 'react-native';
import './searchStyle.js';
import { styles } from './searchStyle.js';
import ProductCard from '../../components/HorizontalProducts/ProductCard'
import SearchHeader from './searchHeader'
import SubCatSearch from './subCatSearch';
import HorizontalProducts from '../../components/HorizontalProducts/HorizontalProducts.js';
import { getCollection } from '../../services/firebase.js';
import { useEffect, useState } from 'react';
import SignUpScreen from '../../screens/User/SignUp'
import Loginscreen from '../../screens/User/LogIn'

export default function SearchPage({navigation}) {
  const [products, setProducts] = useState(null);
  const [subCategories, setSubCategories] = useState([])

  const getProducts = () => {
    getCollection('Products', ['SalePrice', '>=', 0])
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log('error :', err));
  };

  const getSubCategories = async ()=>{
    console.log('in sub');
    getCollection('subCategory').then((res) => {
    setSubCategories(res)
  }

  ).catch(err=>console.log(err))
}

  useEffect(() =>{ 
    getProducts();
    getSubCategories();
  }
  , []);

  return (
    <><ScrollView>
      <View style={styles.container}>
        <SearchHeader products={products} />



        {subCategories &&
          <FlatList
            data={subCategories}
            renderItem={({ item }) => <SubCatSearch item={item} navigation={navigation} />}
            keyExtractor={(item, index) => index}
            horizontal
            // columnWrapperStyle={{ flex: 3, justifyContent: 'space-around' }}
            // numColumns={2}
             />}


        <View style={styles.proShow}>
          <Text style={{ fontSize: 18, margin: 7, fontWeight: 'bold' }}>Our top sellers</Text>
          <Text style={{ color: '#ccc', margin: 7, fontSize: 17 }}>View all</Text>
        </View>

        {products && (
          <HorizontalProducts navigation={navigation} products={products} />
        )}
        <HorizontalProducts />

      </View>

      <View style={{backgroundColor:'#F1EAF1',marginTop:20,padding:10,marginBottom:20}}>
  
        <Text style={{fontSize:19,fontWeight:'bold',marginTop:15}}>Make the most of your IKEA app</Text>
        <Text style={{color:"gray",marginTop:10,fontSize:17}}>Sign up or log in to see and save
         lists from any device</Text>

        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',
                      marginTop:25}}>

          <TouchableOpacity onPress={()=> navigation.navigate('Sign')}
            style={styles.sign}>
            <Text>Sign up</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate('Login')}
           style={styles.login}>
           <Text>Log in</Text>
           </TouchableOpacity>

        </View>

          </View>   


    </ScrollView>
    </>
    
  );
}


