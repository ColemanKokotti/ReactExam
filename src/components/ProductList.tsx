import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Product } from '../utils/types';
import { styles } from '../ styles/ProductListStyles';
import { FavoriteContext } from '../context/FavoriteContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type ProductListProps = {
    products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const { toggleFavorite, favorites } = useContext(FavoriteContext);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handleSelectProduct = (productId: number) => {
        navigation.navigate('ProductDetail', { productId });
    };

    const isFavorite = (id: number) => favorites.some((item) => item.id === id);

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.container} // Applichiamo il centro al contenitore del FlatList
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <TouchableOpacity onPress={() => handleSelectProduct(item.id)}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.info}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                            <TouchableOpacity onPress={() => toggleFavorite(item)}>
                                <AntDesign
                                    name={isFavorite(item.id) ? 'heart' : 'hearto'}
                                    size={24}
                                    color={isFavorite(item.id) ? 'red' : 'black'}
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        />
    );
};

export default ProductList;
