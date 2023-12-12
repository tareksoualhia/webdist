import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonhoteComponent } from './maisonhote.component';

describe('MaisonhoteComponent', () => {
  let component: MaisonhoteComponent;
  let fixture: ComponentFixture<MaisonhoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonhoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisonhoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
