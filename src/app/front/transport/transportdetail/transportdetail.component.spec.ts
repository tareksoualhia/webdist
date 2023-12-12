import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportdetailComponent } from './transportdetail.component';

describe('TransportdetailComponent', () => {
  let component: TransportdetailComponent;
  let fixture: ComponentFixture<TransportdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
