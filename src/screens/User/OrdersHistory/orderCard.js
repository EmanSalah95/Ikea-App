import ItemCard from './itemCard';
import {View} from 'react-native'
import { Card, Divider, Text } from "react-native-paper";
import i18n from 'i18n-js';

const OrderCard = ({ order }) => {
    return (
        <Card style={{ marginBottom: 10 }}>
            <Card.Title 
            style={{ fontWeight: 'bold', fontSize: 10}} 
            title={`${i18n.t('TotalPrice')}: ${i18n.t('EGP')}${order.TotalPrice}`}
            titleStyle={{alignSelf:'flex-start'}}
            />
            <Card.Content>
                <View style={{display:'flex',alignItems:'flex-start'}}>
                <Text>{order.id}</Text>
                <Text style={{ fontStyle: 'italic' }}>{order.CreatedAt.toDate().toString()}</Text>
                {order.Status && <Text style={{ color: 'green' }}>{i18n.t('Delivered')}</Text>}
                {!order.Status && <Text style={{ color: 'red' }}>{i18n.t('Pending')}</Text>}
                </View>
                <Divider style={{ marginVertical: 5 }} />
                {order.Items.map((item) => (
                    <ItemCard item={item} key={item.ProductID} />
                ))}
            </Card.Content>
        </Card>
    );
};
export default OrderCard;