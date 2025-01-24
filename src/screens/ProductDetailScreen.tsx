import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { fetchProductDetails } from '../utils/api';
import { HomeStackParamList } from '../App';
import { Product } from '../utils/types';
import { styles } from '../ styles/ProductDetailScreenStyles';

type ProductDetailScreenRouteProp = RouteProp<HomeStackParamList, 'ProductDetail'>;

const ProductDetailScreen: React.FC<{ route: ProductDetailScreenRouteProp }> = ({ route }) => {
    const { productId } = route.params;
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadProductDetails = async () => {
            try {
                const fetchedProduct = await fetchProductDetails(productId);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error('Error loading product details:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadProductDetails();
    }, [productId]);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    if (!product) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Error loading product details.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.category}>Category: {product.category}</Text>
                <Text style={styles.rating}>
                    Rating: {product.rating.rate} ({product.rating.count} reviews)
                </Text>
            </View>
        </ScrollView>
    );
};

export default ProductDetailScreen;
