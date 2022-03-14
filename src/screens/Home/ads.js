import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles';
import i18n from 'i18n-js';

const ads = [
  i18n.locale=='en'?'Delivery all across Egypt 1':'التوصيل لجميع انحاء مصر',
  i18n.locale=='en'?'90 days return policy 2':'سياسة الإرجاع خلال 90 يومًا',
  i18n.locale=='en'?'Cash on delivery available 3':'الدفع نقدا عند التسليم متاح',
  i18n.locale=='en'?'Cash & Collect available 4':'الطلب و الاستلام متاح',
];

export default function Ads() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   console.log(ads[index]);
    //   setIndex((prev) => (prev < ads.length - 1 ? prev + 1 : 0));
    // }, 3000);
    // return () => clearInterval(interval);
  }, [index]);
  return (
    <View style={styles.ads}>
      <Text>{ads[index]}</Text>
    </View>
  );
}
