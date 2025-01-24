import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Product } from '../utils/types';
import { styles } from '../ styles/ProductDetailStyles';

interface ProductDetailProps {
    product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.category}>Category: {product.category}</Text>
            <Text style={styles.rating}>Rating: {product.rating.rate} ({product.rating.count} reviews)</Text>
        </ScrollView>
    );
};

export default ProductDetail;
