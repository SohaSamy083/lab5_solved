import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
  products:Iproduct[];
  constructor() {
    this.products=[
      {id:1,name:"Vivo mobile",img:"assets/img/download.png",price:50000,quantity:3,categoryID:10},
      {id:2,name:"Samsung mobile",img:"assets/img/download.png",price:40000,quantity:1,categoryID:10},
      {id:3,name:"Oppo mobile",img:"assets/img/download.png",price:10000,quantity:2,categoryID:10},
      {id:4,name:"Dell laptop",img:"assets/img/download.png",price:45000,quantity:3,categoryID:20},
      {id:5,name:"HP laptop",img:"assets/img/download.png",price:60000,quantity:1,categoryID:20},
      {id:6,name:"apple laptop",img:"assets/img/download.png",price:65000,quantity:0,categoryID:20},
      {id:7,name:"Lenovo tablet",img:"assets/img/download.png",price:30000,quantity:2,categoryID:30},
      {id:8,name:"Huawei tablet",img:"assets/img/download.png",price:35000,quantity:0,categoryID:30},
      {id:9,name:"sumsung tablet",img:"assets/img/download.png",price:32000,quantity:4,categoryID:30},
    ];
   }
   getAllProducts():Iproduct[]{
    return this.products;
   }
   getProductById(id:number):Iproduct|null{
     let product=this.products.find((prod)=> prod.id==id);
     return product?product:null;

   }
   getProductByCatId(catId:number):Iproduct[]{
    return this.products.filter((p)=>p.categoryID==catId);
   }
   mapProductsToIds():number[]{
   return this.products.map((item) =>item.id)
   }
}
