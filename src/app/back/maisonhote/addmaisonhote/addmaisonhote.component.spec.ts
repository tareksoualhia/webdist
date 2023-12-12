import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmaisonhoteComponent } from './addmaisonhote.component';

describe('AddmaisonhoteComponent', () => {
  let component: AddmaisonhoteComponent;
  let fixture: ComponentFixture<AddmaisonhoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmaisonhoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmaisonhoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
