import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles';
const ads = [
  'Delivery all across Egypt',
  '90 days returb policy',
  'Cash on delivery available',
  'Cash & Collect available',
];

export default function Ads() {
  const [index, setIndex] = useState(0);
  const viewAds = () => {
    let i = 0;
    setInterval(() => {
      console.log(ads[i]);
      i = i < ads.length - 1 ? ++i : 0;
      setIndex(i);
    }, 5000);
  };
  useEffect(() => {
    // viewAds();
  }, []);
  return (
    <View style={styles.ads}>
      <Text>{ads[index]}</Text>
    </View>
  );
}
