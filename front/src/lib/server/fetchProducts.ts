import { IProduct } from "@/interfaces/Interfaces";

export async function fetchProducts() {

  try {
    const response = await fetch("http://localhost:5000/products", {
      next: { revalidate: 3600 }
    })


    const products = await response.json()

    return products;

  } catch (error) {
    console.log(error);
  }
}

export async function fetchProductById(id: string): Promise<IProduct | null> {
  try {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    if (!response.ok) {
        console.error(`Failed to fetch product. Status: ${response.status}`);
        throw new Error('Product not found or API request failed');
    }
    const product = await response.json();
    return product;
} catch (error) {
    console.error('Error fetching product:', error);
    return null;
}
}

