import { useEffect } from 'react';
import { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { getDocumentByID } from '../../../services/firebase';
import { styles } from './styles';

const ItemCard = ({ item }) => {
    const [product, setProduct] = useState({
        Images: [],
        Name: '',
        Price: 0,
    });
    const getProductData = async () => {
        return getDocumentByID('Products', item.ProductID).then((product) => {
            setProduct(product);
        });
    };
    useEffect(() => {
        getProductData();
    }, [item]);
    return (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Image
                source={{ uri: product.Images[0] }}
                style={styles.productImg}
            />
            <View style={styles.productInfo}>
                <Text style={{fontWeight:'bold'}}>{product.Name}</Text>
                <Text>EGP {product.Price}</Text>
                <Text>Amount: {item.Amount}</Text>
            </View>
        </View>
    );
};
export default ItemCard;