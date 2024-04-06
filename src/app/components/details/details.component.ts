import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { StaticProductService } from '../../services/static-product.service';
import {Location} from '@angular/common'
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  currentId:number=0;
  product: Iproduct|null=null;
  productIds: number[] = [];
  constructor(private _activatedRoute:ActivatedRoute,private _staticService:StaticProductService,private _location:Location,private _router:Router){
    this.productIds=this._staticService.mapProductsToIds();
  }
  ngOnInit() {

   this._activatedRoute.paramMap.subscribe((paramMap)=>{
    this.currentId=Number(paramMap.get('id'))
    this.product=this._staticService.getProductById(this.currentId)
   })
  }
  back(){
    this._location.back();
  }
  prev() {
    let currentIndex = this.productIds.indexOf(this.currentId);
    if (currentIndex > 0) {
        this._router.navigateByUrl(`/details/${this.productIds[currentIndex - 1]}`);
    } else {
        this._router.navigateByUrl(`/details/${this.productIds[this.productIds.length - 1]}`);
    }
}

next() {
  let currentIndex = this.productIds.indexOf(this.currentId);
    if (currentIndex < this.productIds.length - 1) {
        this._router.navigateByUrl(`/details/${this.productIds[currentIndex + 1]}`);
    } else {
        this._router.navigateByUrl(`/details/${this.productIds[0]}`);
    }
}

}
