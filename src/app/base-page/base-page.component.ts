import { Component, OnInit } from '@angular/core';
// import { ProduseComponent } from '../produse/produse.component';
// import { parse } from 'path';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {
  title             = 'Shopping Cart';
  produseCos        = [];
  total             = 0;
  totalFaraTva      = 0;
  valoareTva        = 0;
  totalArray        = [];
  totalProduseArray = [];
  totalProduse      = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item){  
    this.produseCos = item;
    this.setTotalProduse();
    
  }
  onDelete(item){       
    this.produseCos = item
    this.setTotalProduse()
  }

  setTotalProduse(){
    this.setEmpty();

    if(this.produseCos.length > 0){
      this.produseCos.forEach(p => {
        this.totalArray.push(p.pret);
      })
      this.totalProduse = this.produseCos.length;
      this.total        = this.returnPrecise(this.arrReduce(this.totalArray));
      this.totalFaraTva = this.returnPrecise(this.total / 1.19);
      this.valoareTva   = this.returnPrecise(this.total - this.totalFaraTva);
    }   
  }

  setEmpty(){
    this.total        = 0;
    this.totalProduse = 0;
    this.totalFaraTva = 0
    this.valoareTva   = 0;
    this.totalArray   = [];
  }

  returnPrecise(nr){
    let temp = nr.toFixed(2);
    return Number.parseFloat(temp);
  }

  arrReduce(arr){
    return arr.reduce((a, b) => a + b, 0);
  }

}
