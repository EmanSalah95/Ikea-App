import ItemCard from './itemCard';

import { Card, Divider, Text } from "react-native-paper";

const OrderCard = ({ order }) => {
    return (
        <Card style={{ marginBottom: 10 }}>
            <Card.Title 
            style={{ fontWeight: 'bold', fontSize: 10 }} 
            title={`TotalPrice: EGP${order.TotalPrice}`}
            />
            <Card.Content>
                <Text>#{order.id}</Text>
                <Text style={{ fontStyle: 'italic' }}>{order.CreatedAt.toDate().toString()}</Text>
                {order.Status && <Text style={{ color: 'green' }}>Delivered</Text>}
                {!order.Status && <Text style={{ color: 'red' }}>Pending</Text>}
                <Divider style={{ marginVertical: 5 }} />
                {order.Items.map((item) => (
                    <ItemCard item={item} key={item.ProductID} />
                ))}
            </Card.Content>
        </Card>
    );
};
export default OrderCard;