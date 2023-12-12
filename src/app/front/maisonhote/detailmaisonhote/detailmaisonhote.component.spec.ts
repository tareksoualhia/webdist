import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmaisonhoteComponent } from './detailmaisonhote.component';

describe('DetailmaisonhoteComponent', () => {
  let component: DetailmaisonhoteComponent;
  let fixture: ComponentFixture<DetailmaisonhoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmaisonhoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailmaisonhoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
