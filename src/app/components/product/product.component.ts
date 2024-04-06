import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
//import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HoverCardDirective } from '../../directives/hover-card.directive';
import { PipeTransformPipe } from '../../pipes/pipe-transform.pipe';
import { CreditPipePipe } from '../../pipes/credit-pipe.pipe';
import { StaticProductService } from '../../services/static-product.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,HoverCardDirective,PipeTransformPipe,CreditPipePipe,RouterLink],

templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges {
 // products:Iproduct[];
  filteredProducts: Iproduct[];
@Input() received:number=0;
  
  @Output() onProductBought: EventEmitter<Iproduct>
  constructor(private _staticProductsService:StaticProductService,private router:Router){

   this.onProductBought=new EventEmitter<Iproduct>();
    this.filteredProducts=this._staticProductsService.products;
  }
  ngOnChanges(){
    console.log(this.received)
    if(this.received == 0){
      this.filteredProducts = this._staticProductsService.products;
    } else {
      this.filteredProducts = this._staticProductsService.getProductByCatId(this.received);
    }
  }
  buyProduct(product: Iproduct) {
    if (product.quantity > 0) {
      product.quantity--;
    }
    //fire event
    this.onProductBought.emit(product);
  }

  // filterProducts(){
  //   if(this.received==0){
  //     this.filteredProducts=this.products;
  //   }else{
  //     this.filteredProducts=this.products.filter((item)=>item.categoryID==this.received);
  //   }
  // }

  navigateToDetailes(id:number){
    // this.router.navigate(['/details']);
     this.router.navigateByUrl( `/details/${id}`);
  }
}



