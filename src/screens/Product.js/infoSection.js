import { Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import { styles } from "./styles";
import AntDesign from 'react-native-vector-icons/AntDesign'

export const InfoSection = ({ product, navigation }) => {
    return (
        <View style={styles.InfoContainer}>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>{product.ProductName}</Text>
            <Text style={{ color: 'grey' }}>{product.Name}</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{ color: 'gray' }}>
                    {product.Color}
                </Text>
                {
                    (product.Height && product.Width && product.Thickness) && (
                        <Text style={{ color: 'gray' }}>, {product.Height} x {product.Width} x {product.Thickness} cm</Text>
                    )
                }
                {
                    (product.Height && product.Width && !product.Thickness) && (
                        <Text style={{ color: 'gray' }}>, {product.Height} x {product.Width} cm</Text>
                    )
                }
                {
                    (product.Width && !product.Height && !product.Thickness) && (
                        <Text style={{ color: 'gray' }}>, {product.Width} cm</Text>
                    )
                }
                {
                    (product.Thickness && !product.Width && !product.Height) && (
                        <Text style={{ color: 'gray' }}>, {product.Thickness} cm</Text>
                    )
                }
                {
                    (product.Height && !product.Width && !product.Thickness) && (
                        <Text style={{ color: 'gray' }}>, {product.Height} cm</Text>
                    )
                }
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>EGP {product.Price}</Text>
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
                <Text style={{fontWeight:'bold'}}>More info</Text>
                <AntDesign
                    name='right'
                    size={15}
                />
            </TouchableOpacity>
            <Divider style={styles.divider} />

        </View>

    )
}