import { useEffect } from "react"
import { ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import { h, w } from "../../constants/dimentions";
import { styles } from "./styles";

export const ProductDetails = ({ route, navigation }) => {
    const product = route.params.details;
    useEffect(() => {
        navigation.setOptions({
            title: product.ProductName
        })
    }, []);
    return (
        <ScrollView style={{ backgroundColor: 'white', height: h, paddingHorizontal: 20 }}>
            <View style={{ marginVertical: 30 }}>
                <Text style={{ fontWeight: 'bold', paddingBottom: 30 }}>Product description</Text>
                <Text>{product.Description}</Text>
            </View>
            <Divider style={styles.detailsDivider} />
            {(product.Thickness || product.Height || product.Width) &&
                <>
                    <View style={{ marginVertical: 30 }}>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 30 }}>Product sizing</Text>
                        {
                            (product.Thickness) && (
                                <View style={styles.sizeDetails}>
                                    <Text>Depth</Text>
                                    <Text>{product.Thickness} cm</Text>
                                </View>
                            )
                        }
                        {
                            (product.Height) && (
                                <View style={styles.sizeDetails}>
                                    <Text>Height</Text>
                                    <Text>{product.Height} cm</Text>
                                </View>
                            )
                        }
                        {
                            (product.Width) && (
                                <View style={styles.sizeDetails}>
                                    <Text>Width</Text>
                                    <Text>{product.Width} cm</Text>
                                </View>
                            )
                        }
                    </View>
                    <Divider style={styles.detailsDivider} />
                </>
            }
            {(product.Material) &&
                <>
                    <View style={{ marginVertical: 30 }}>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 30 }}>Product Material</Text>
                        <Text>{product.Material}</Text>
                    </View>
                    <Divider style={styles.detailsDivider} />
                </>
            }
            {(product.Color) &&
                <>
                    <View style={{ marginVertical: 30 }}>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 30 }}>Product Color</Text>
                        <Text>{product.Color}</Text>
                    </View>
                    <Divider style={styles.detailsDivider} />
                </>
            }
        </ScrollView>
    )
}