import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-plata-card',
  templateUrl: './plata-card.component.html',
  styleUrls: ['./plata-card.component.css']
})
export class PlataCardComponent implements OnInit {

  suma: string;

  submitted = false;
  model = {nume:'', numarCard:'', dataExpirare:'', codSecuritate:''};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    
  }

  onSubmit() { 
    this.submitted = true; 
    console.log('submitted!', this.model);
    
  }

  reset(){
    this.model = {nume:'', numarCard:'', dataExpirare:'', codSecuritate:''};
  }



  ngOnInit(): void {
    this.suma = this.route.snapshot.paramMap.get('suma')
    console.log('am primit', this.suma);    
  }

  toHome(){    
    this.router.navigate(['/base-page'], { relativeTo: this.route });
  }

}
