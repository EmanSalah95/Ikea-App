import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles';
const ads = [
  'Delivery all across Egypt 1',
  '90 days return policy 2',
  'Cash on delivery available 3',
  'Cash & Collect available 4',
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
