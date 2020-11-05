import { Component, OnInit } from '@angular/core';
// import { ProduseComponent } from '../produse/produse.component';
// import { parse } from 'path';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {
  title = 'Shopping Cart';
  produseCos = [];
  total = 0;
  totalArray = [];
  totalProduseArray = [];
  totalProduse = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // getProduseCos(){
  //   let myObj       = new ProduseComponent();
  //   this.produseCos = myObj.getProduse();
  // }

  onSelect(item){
    this.totalArray = [];
    this.produseCos = item;
    this.setTotalProduse();
    
  }
  onDelete(items){    
    this.totalArray = [];
    this.produseCos = items
    this.setTotalProduse()
  }

  setTotalProduse(){
    this.total = 0;
    this.totalProduse = 0;
    if(this.produseCos.length > 0){
      this.produseCos.forEach(p => {
        this.totalArray.push(p.pret);
      })
      this.totalProduse = this.produseCos.length;
      this.total = this.totalArray.reduce((a, b) => a + b, 0)
    }   
  }

}
