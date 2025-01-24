import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    card: {
        width: '100%',
        marginBottom: 20,
        backgroundColor: '#1abc9c',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: 'white',
        marginBottom: 10,
    },
    cardRow: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#1abc9c',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    imageRow: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 5,
    },
    infoRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    titleRow: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    priceRow: {
        fontSize: 14,
        fontWeight: '600',
        color: '#27ae60',
    },
    descriptionRow: {
        fontSize: 12,
        color: '#666',
    },
    favoriteButton: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -12 }],
    },
});
