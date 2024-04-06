import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
//import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent,OrderComponent, HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab1';
}
