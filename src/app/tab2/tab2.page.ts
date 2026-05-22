import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBack, chevronForward, cart} from 'ionicons/icons';
import { ProductService, Product } from '../services/product.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
    IonCardContent, IonButton, IonIcon, IonSpinner,
  ],
})
export class Tab2Page implements OnInit {
  products: Product[] = [];
  currentIndex = 0;
  loading = true;

  constructor(private productService: ProductService) {
    addIcons({ chevronBack, chevronForward, cart });
  }
  async ngOnInit() {
    await this.productService.loadProducts();
    this.products = this.productService.products;
    this.loading = false;
  }
  
  get currentProduct(): Product | null {
    return this.products[this.currentIndex] ?? null;
  }

  get isFirst(): boolean {
    return this.currentIndex === 0;
  }

  get isLast(): boolean {
    return this.currentIndex === this.products.length - 1;
  }

  previous() {
    if (!this.isFirst) this.currentIndex--;
  }

  next() {
    if (!this.isLast) this.currentIndex++;
  }
}