const BASE_URL = 'https://fakestoreapi.com';

/**
 * Fetch all products from the API.
 * @returns {Promise<any[]>} - A promise that resolves to the list of products.
 */
export const fetchProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

/**
 * Fetch the details of a single product by its ID.
 * @param {number} productId - The ID of the product to fetch.
 * @returns {Promise<any>} - A promise that resolves to the product details.
 */
export const fetchProductDetails = async (productId: number) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch product details: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
};

/**
 * Fetch all product categories.
 * @returns {Promise<string[]>} - A promise that resolves to the list of product categories.
 */
export const fetchCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products/categories`);
        if (!response.ok) {
            throw new Error(`Failed to fetch categories: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};
