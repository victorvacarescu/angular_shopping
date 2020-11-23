import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Produs } from '../produs';
import { PRODUSE } from '../mock-produse';

import { StatusService } from '../shared/status.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-produse',
  templateUrl: './produse.component.html',
  styleUrls: ['./produse.component.css']
})
export class ProduseComponent implements OnInit {

  // produse = PRODUSE;
  produse: {};
  selectedProduse = [];

  @Output()
  open: EventEmitter<any> = new EventEmitter();
  
  constructor(private statusService: StatusService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getListaProduse();
  }

  onSelect(item: Produs): void {
    this.selectedProduse.push(item);
    this.open.emit(this.selectedProduse)
  }

  getListaProduse(){
    this.http.post("http://angular-shopping-cart.menut.ro/api/index.php/test/get_produse",{test:"test"})
      .toPromise().then(data => {     
        this.produse = data;
        
      })
  }

  
  getProduse(){    
    return this.selectedProduse
  }

}
