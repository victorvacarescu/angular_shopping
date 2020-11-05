import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cos-cumparaturi',
  templateUrl: './cos-cumparaturi.component.html',
  styleUrls: ['./cos-cumparaturi.component.css']
})
export class CosCumparaturiComponent implements OnInit {

  @Input() items        =[];
  @Input() total        = 0;
  @Input() totalProduse = 0;
  @Input() valoareTva   = 0;
  @Input() totalFaraTva = 0;

  @Output()
  delete: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onDelete(item){
    var index = this.items.indexOf(item)
    this.items.splice(index,1)
    this.delete.emit(this.items)
  }

  toPayment(suma){
    this.router.navigate(['/plata-card', suma], { relativeTo: this.route });
    
  }

}
