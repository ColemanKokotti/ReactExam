import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Product } from '../utils/types';
import { styles } from '../ styles/FavoritesStyles';

interface FavoritesProps {
    favorites: Product[];
}

const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
    return (
        <FlatList
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.info}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    </View>
                </View>
            )}
        />
    );
};

export default Favorites;
