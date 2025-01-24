import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteProvider } from './context/FavoriteContext';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, Animated, View } from 'react-native';
import Filter from '../src/components/Filter';
import AntDesign from '@expo/vector-icons/AntDesign';

export type RootStackParamList = {
    HomeStack: undefined;
    ProductDetail: { productId: number };
    FavoritesStack: undefined;
};

export type HomeStackParamList = {
    Home: undefined;
    ProductDetail: { productId: number };
};

export type FavoritesStackParamList = {
    Favorites: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();
const FavoritesStack = createStackNavigator<FavoritesStackParamList>();
const BottomTab = createBottomTabNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [categories] = useState(['Category 1', 'Category 2', 'Category 3']);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOption, setSortOption] = useState('none');
    const [filterAnimation] = useState(new Animated.Value(-300));

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const handleSortOptionChange = (option: string) => {
        setSortOption(option);
    };

    const handleApplyFilters = () => {
        setFilterVisible(false);
        Animated.spring(filterAnimation, {
            toValue: -300,
            useNativeDriver: true,
        }).start();
    };

    const toggleFilter = () => {
        setFilterVisible(!isFilterVisible);
        Animated.spring(filterAnimation, {
            toValue: isFilterVisible ? -300 : 0,
            useNativeDriver: true,
        }).start();
    };

    const closeFilter = () => {
        setFilterVisible(false);
        Animated.spring(filterAnimation, {
            toValue: -300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <>
            <HomeStack.Navigator>
                <HomeStack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={({ navigation }) => ({
                        title: 'Product Catalog',
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={toggleFilter}
                                style={{ marginRight: 15 }}
                            >
                                <Ionicons name="filter" size={24} color="black" />
                            </TouchableOpacity>
                        ),
                    })}
                />
                <HomeStack.Screen
                    name="ProductDetail"
                    component={ProductDetailScreen}
                    options={{ title: 'Product Details' }}
                />
            </HomeStack.Navigator>

            {/* Menu a tendina per i filtri */}
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    zIndex: 100,
                    transform: [{ translateY: filterAnimation }],
                    paddingTop: 50,
                }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={closeFilter} style={{ marginRight: 15 }}>
                        <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Filter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                    onApplyFilters={handleApplyFilters}
                    sortOption={sortOption}
                    onSortOptionChange={handleSortOptionChange}
                />
            </Animated.View>
        </>
    );
};

const FavoritesStackNavigator = () => {
    return (
        <FavoritesStack.Navigator>
            <FavoritesStack.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{ title: 'Favorite Products' }}
            />
        </FavoritesStack.Navigator>
    );
};

const App: React.FC = () => {
    return (
        <FavoriteProvider>
            <NavigationContainer>
                <BottomTab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName: string = '';

                            if (route.name === 'HomeStack') {
                                iconName = focused ? 'home' : 'home-outline';
                            } else if (route.name === 'FavoritesStack') {
                                iconName = focused ? 'heart' : 'heart-outline';
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                        headerShown: false,
                    })}
                >
                    <BottomTab.Screen
                        name="HomeStack"
                        component={HomeStackNavigator}
                        options={{ title: 'Home' }}
                    />
                    <BottomTab.Screen
                        name="FavoritesStack"
                        component={FavoritesStackNavigator}
                        options={{
                            title: 'Favorites',
                            tabBarIcon: ({ focused, color, size }) => (
                                <AntDesign name={focused ? 'heart' : 'hearto'} size={size} color={color} />
                            ),
                        }}
                    />
                </BottomTab.Navigator>
            </NavigationContainer>
        </FavoriteProvider>
    );
};

export default App;
