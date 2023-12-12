import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmaisonhoteComponent } from './listmaisonhote.component';

describe('ListmaisonhoteComponent', () => {
  let component: ListmaisonhoteComponent;
  let fixture: ComponentFixture<ListmaisonhoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmaisonhoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmaisonhoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
