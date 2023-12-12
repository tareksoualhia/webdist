import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransportComponent } from './addtransport.component';

describe('AddtransportComponent', () => {
  let component: AddtransportComponent;
  let fixture: ComponentFixture<AddtransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
