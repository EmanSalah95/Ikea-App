import i18n from 'i18n-js';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { getDocumentByID } from '../../../services/firebase';
import { styles } from './styles';

const ItemCard = ({ item }) => {
    const [product, setProduct] = useState({
        Images: [],
        Name: '',
        NameAr:'',
        Price: 0,
    });
    const getProductData = async () => {
        return getDocumentByID('Products', item.ProductID).then((product) => {
            setProduct(product);
        })
        .catch((err)=>console.log(err))
    };
    useEffect(() => {
        getProductData();
    }, [item]);
    return (
        <View style={{ display: 'flex', flexDirection: 'row'}}>
            <Image
                source={{ uri: product.Images[0] }}
                style={styles.productImg}
            />
            <View style={styles.productInfo}>
                <Text style={{fontWeight:'bold'}}>{i18n.locale=='en'?product.Name:product.NameAr}</Text>
                <Text>{i18n.t('EGP')} {product.Price}</Text>
                <Text>{i18n.t('Amount')}: {item.Amount}</Text>
            </View>
        </View>
    );
};
export default ItemCard;