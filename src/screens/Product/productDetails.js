import { useEffect } from "react"
import { ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import { h, w } from "../../constants/dimentions";
import { styles } from "./styles";
import i18n from 'i18n-js';
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
                <Text style={{ fontWeight: 'bold', paddingBottom: 30 }}>{i18n.t('ProductDesc')}</Text>
                <Text>{i18n.locale=='en'?product.Description:product.DescriptionAr}</Text>
            </View>
            <Divider style={styles.detailsDivider} />
            {(product.Thickness || product.Height || product.Width) &&
                <>
                    <View style={{ marginVertical: 30 }}>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 30 }}>{i18n.t('ProductSizing')}</Text>
                        {
                            (product.Thickness) && (
                                <View style={styles.sizeDetails}>
                                    <Text>{i18n.t('Depth')}</Text>
                                    <Text>{product.Thickness} {i18n.t('CM')}</Text>
                                </View>
                            )
                        }
                        {
                            (product.Height) && (
                                <View style={styles.sizeDetails}>
                                    <Text>{i18n.t('Height')}</Text>
                                    <Text>{product.Height} {i18n.t('CM')}</Text>
                                </View>
                            )
                        }
                        {
                            (product.Width) && (
                                <View style={styles.sizeDetails}>
                                    <Text>{i18n.t('Width')}</Text>
                                    <Text>{product.Width} {i18n.t('CM')}</Text>
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
                        <Text style={{ fontWeight: 'bold', paddingBottom: 30 }}>{i18n.t('ProductMaterial')}</Text>
                        <Text>{i18n.locale=='en'?product.Material:product.MaterialAr}</Text>
                    </View>
                    <Divider style={styles.detailsDivider} />
                </>
            }
            {(product.Color) &&
                <>
                    <View style={{ marginVertical: 30 }}>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 30 }}>{i18n.t('ProductColor')}</Text>
                        <Text>{i18n.locale=='en'?product.Color:product.ColorAr}</Text>
                    </View>
                    <Divider style={styles.detailsDivider} />
                </>
            }
        </ScrollView>
    )
}