import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    
    private apiUrl = 'https://fakestoreapi.com/products';
    public products: Product[] = [];

    constructor(private http: HttpClient) {}
    
    loadProducts(): Promise<void> {
        return new Promise((resolve) => {
            if (this.products.length > 0) {
                resolve();
                return;
            }
            this.http.get<Product[]>(this.apiUrl).subscribe({
                next: (data) => {
                    this.products = data;
                    resolve();
                },
                error: () => resolve()
            });
        });
    }
}
