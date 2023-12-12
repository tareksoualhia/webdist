import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmaisonhoteComponent } from './editmaisonhote.component';

describe('EditmaisonhoteComponent', () => {
  let component: EditmaisonhoteComponent;
  let fixture: ComponentFixture<EditmaisonhoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmaisonhoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditmaisonhoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
