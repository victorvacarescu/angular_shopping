import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { StatusService } from '../shared/status.service';
import { HttpClient } from '@angular/common/http';
import { ElMessageService } from 'element-angular'

@Component({
  selector: 'app-plata-card',
  templateUrl: './plata-card.component.html',
  styleUrls: ['./plata-card.component.css']
})
export class PlataCardComponent implements OnInit {  
  
  raspuns:{};
  suma: String;
  disabled = true;
  model     = {nume:'', numarCard:'', dataExpirare:'', codSecuritate:''};

  constructor(private route: ActivatedRoute,private router: Router, private statusService: StatusService, private http: HttpClient, private message: ElMessageService) { }
    
  onSubmit() { 
    console.log('submitted!', this.model);

    var formData: any = new FormData();
    formData.append("numarCard", this.model.numarCard);
      
    this.http.post<any>('http://angular-shopping-cart.menut.ro/api/index.php/test/check_payment', formData).subscribe(data => {
      if(!data)
        this.message['success']('Plata efectuata cu succes!');
      else
      this.message['error']('Plata nereusita!');
    })
    this.reset();
  }

  reset(){
    this.model    = {nume:'', numarCard:'', dataExpirare:'', codSecuritate:''};
    this.disabled = true
  }

  ngOnInit(): void {
    this.suma = this.route.snapshot.paramMap.get('suma')
  }

  toHome(){    
    this.router.navigate(['/base-page'], { relativeTo: this.route });
  }

  generateSuccessCard(){
    this.model    = {nume:'Victor', numarCard:'111100000000111', dataExpirare:'12/24', codSecuritate:'111'};
    this.disabled = false
  }

  generateFailedCard(){
    this.model    = {nume:'Victor', numarCard:'222200000000222', dataExpirare:'12/24', codSecuritate:'111'};
    this.disabled = false
  }

}
