import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataCardComponent } from './plata-card.component';

describe('PlataCardComponent', () => {
  let component: PlataCardComponent;
  let fixture: ComponentFixture<PlataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlataCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
