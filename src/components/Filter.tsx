import React from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../ styles/FilterStyles';

interface FilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    onApplyFilters: () => void;
    sortOption: string;
    onSortOptionChange: (option: string) => void;
}

const Filter: React.FC<FilterProps> = ({
                                           categories,
                                           selectedCategory,
                                           onCategoryChange,
                                           onApplyFilters,
                                           sortOption,
                                           onSortOptionChange,
                                       }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Category</Text>
            <Picker selectedValue={selectedCategory} onValueChange={onCategoryChange}>
                {categories.map(category => (
                    <Picker.Item key={category} label={category} value={category} />
                ))}
            </Picker>
            <Text style={styles.label}>Sort by Rating</Text>
            <Picker selectedValue={sortOption} onValueChange={onSortOptionChange}>
                <Picker.Item label="None" value="none" />
                <Picker.Item label="Ascending" value="asc" />
                <Picker.Item label="Descending" value="desc" />
            </Picker>
            <Button title="Apply Filters" onPress={onApplyFilters} />
        </View>
    );
};

export default Filter;
