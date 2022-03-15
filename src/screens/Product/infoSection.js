import { Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import { styles } from "./styles";
import AntDesign from 'react-native-vector-icons/AntDesign'
import i18n from 'i18n-js';

export const InfoSection = ({ product, navigation }) => {
    return (
        <View style={styles.InfoContainer}>
            <Text style={{ fontWeight: 'bold', fontSize: 12 , textAlign:'left'}}>{product.ProductName}</Text>
            <Text style={{ color: 'grey'}}>{i18n.locale=='en'?product.Name:product.NameAr}</Text>
            <View style={{ display: 'flex', flexDirection:'row' }}>
                <Text style={{ color: 'gray' }}>
                    {i18n.locale=='en'?product.Color:product.ColorAr}
                </Text>
                {
                    (product.Height && product.Width && product.Thickness) && (
                        <Text style={{ color: 'gray' }}>, {product.Height} x {product.Width} x {product.Thickness} {i18n.t('CM')}</Text>
                    )
                }
                {
                    (product.Height && product.Width && !product.Thickness) && (
                        <Text style={{ color: 'gray' }}>, {product.Height} x {product.Width} {i18n.t('CM')}</Text>
                    )
                }
                {
                    (product.Width && !product.Height && !product.Thickness) && (
                        <Text style={{ color: 'gray' }}>, {product.Width} {i18n.t('CM')}</Text>
                    )
                }
                {
                    (product.Thickness && !product.Width && !product.Height) && (
                        <Text style={{ color: 'gray' }}>, {product.Thickness} {i18n.t('CM')}</Text>
                    )
                }
                {
                    (product.Height && !product.Width && !product.Thickness) && (
                        <Text style={{ color: 'gray' }}>, {product.Height} {i18n.t('CM')}</Text>
                    )
                }
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{i18n.t('EGP')} {product.Price}</Text>
            <Divider style={styles.divider} />
            {/* product details */}
            <TouchableOpacity
                style={styles.detailsTabs}
                onPress={() => {
                    navigation.navigate(
                        {
                            name: 'ProductDetails',
                            params: { details: product }
                        }
                    );
                }}
            >
                <Text style={{fontWeight:'bold'}}>{i18n.t('MoreInfo')}</Text>
                <AntDesign
                    name={i18n.locale=='en'?'right':'left'}
                    size={15}
                />
            </TouchableOpacity>
            <Divider style={styles.divider} />

        </View>

    )
}