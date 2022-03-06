import React, { useEffect, useState } from 'react'
import {Text, View, Image, ScrollView} from 'react-native';
import { getCollection } from '../../services/firebase';
import {limit} from 'firebase/firestore';

export default function SubCatSearch({navigation,item}) {
    const [subCat, setSubCat] = useState([])

    const getSubCat = async ()=>{
      console.log('in sub');
    
    getCollection('subCategory').then((res) => {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',res.length);
    }

    ).catch(err=>console.log(err))
  
    let categories = [];
    results.forEach(res => {
      categories.push({ id: res.id, data: res.data() });
      console.log(categories);
      console.log(res);
    });
  
   setSubCat([...categories])
  }

  return (
    <View
    style={{
      backgroundColor: "#F1EAF1",
      padding: 15,
      margin: 5,
      
    }}
  >
 
    <Image source={{ uri: item.data().Image }} style={{ height: 120,width:150 }} />
    <Text style={{fontSize:15,marginTop:7}}>{item.data().Name}</Text>

  </View>

  )
}
