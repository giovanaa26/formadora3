import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { list, eyeOff, cart } from 'ionicons/icons';
import { ProductService, Product } from '../services/product.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonCardContent, IonButton, IonIcon, IonSpinner,
  ],
})
export class Tab3Page implements OnInit {
  products: Product[] = [];
  showList = false;
  loading = true;

  constructor(private productService: ProductService) {
    addIcons({ list, eyeOff, cart });
  }

  async ngOnInit() {
    await this.productService.loadProducts();
    this.products = this.productService.products;
    this.loading = false;
  }

  toggleList() {
    this.showList = !this.showList;
  }
}