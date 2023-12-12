import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittransportComponent } from './edittransport.component';

describe('EdittransportComponent', () => {
  let component: EdittransportComponent;
  let fixture: ComponentFixture<EdittransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
