import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, ActivityIndicator } from 'react-native';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import { fetchProducts } from '../utils/api';
import { Product } from '../utils/types';
import { styles } from '../ styles/HomeScreenStyles';

const HomeScreen: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [sortOption, setSortOption] = useState<string>('none');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const allProducts = await fetchProducts();
                setProducts(allProducts);
                setFilteredProducts(allProducts);
                const uniqueCategories = ['all', ...Array.from(new Set(allProducts.map((p: Product) => p.category)))];
                setCategories(uniqueCategories as string[]);
            } catch (error) {
                console.error('Error loading products:', error);
            } finally {
                setIsLoading(false);
            }
        };
        loadProducts();
    }, []);

    const handleCategoryChange = (category: string) => setSelectedCategory(category);

    const handleApplyFilters = () => {
        let filtered = selectedCategory === 'all'
            ? products
            : products.filter(product => product.category === selectedCategory);

        if (sortOption === 'asc') {
            filtered = filtered.sort((a, b) => a.rating.rate - b.rating.rate);
        } else if (sortOption === 'desc') {
            filtered = filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        }

        setFilteredProducts(filtered);
    };

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ProductList products={filteredProducts} />
        </SafeAreaView>
    );
};

export default HomeScreen;
