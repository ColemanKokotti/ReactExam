import React, { useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Favorites from '../components/Favorites';
import { styles } from '../ styles/FavoritesScreenStyles';
import { FavoriteContext } from '../context/FavoriteContext';

const FavoritesScreen: React.FC = () => {
    const { favorites } = useContext(FavoriteContext);

    return (
        <SafeAreaView style={styles.container}>
            {favorites.length === 0 ? (
                <View style={styles.emptyState}>
                    <Text style={styles.emptyText}>
                        You haven't added any favorite products yet.
                    </Text>
                </View>
            ) : (
                <Favorites favorites={favorites} />
            )}
        </SafeAreaView>
    );
};

export default FavoritesScreen;