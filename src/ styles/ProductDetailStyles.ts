import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    image: {
        width: '100%',
        height: 250,
        marginBottom: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        color: '#27ae60',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: '#555',
        marginBottom: 10,
    },
    category: {
        fontSize: 14,
        fontWeight: '600',
        color: '#888',
        marginBottom: 5,
    },
    rating: {
        fontSize: 14,
        fontWeight: '600',
        color: '#f1c40f',
    },
});
