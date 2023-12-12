import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloffreComponent } from './alloffre.component';

describe('AlloffreComponent', () => {
  let component: AlloffreComponent;
  let fixture: ComponentFixture<AlloffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlloffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlloffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
