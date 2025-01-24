import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8A4FFF', // Vibrant violet background
        paddingHorizontal: 10,
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8A4FFF',
    },
    emptyText: {
        fontFamily: 'Unkempt-Regular',
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 20,
    }
});