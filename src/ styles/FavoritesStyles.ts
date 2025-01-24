import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 5,
    },
    info: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    price: {
        fontSize: 14,
        fontWeight: '600',
        color: '#27ae60',
    },
});
