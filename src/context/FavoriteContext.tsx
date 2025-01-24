import React, { createContext, useState, ReactNode } from 'react';
import { Product } from '../utils/types';

interface FavoriteContextType {
    favorites: Product[];
    toggleFavorite: (product: Product) => void;
}

interface FavoriteProviderProps {
    children: ReactNode;
}

export const FavoriteContext = createContext<FavoriteContextType>({
    favorites: [],
    toggleFavorite: () => {}
});

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
    const [favorites, setFavorites] = useState<Product[]>([]);

    const toggleFavorite = (product: Product) => {
        setFavorites(currentFavorites => {
            const isAlreadyFavorite = currentFavorites.some(p => p.id === product.id);

            if (isAlreadyFavorite) {
                return currentFavorites.filter(p => p.id !== product.id);
            } else {
                return [...currentFavorites, { ...product, isFavorite: true }];
            }
        });
    };

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};