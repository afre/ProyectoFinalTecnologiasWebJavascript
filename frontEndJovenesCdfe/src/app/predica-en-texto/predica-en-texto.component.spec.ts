import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredicaEnTextoComponent } from './predica-en-texto.component';

describe('PredicaEnTextoComponent', () => {
  let component: PredicaEnTextoComponent;
  let fixture: ComponentFixture<PredicaEnTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredicaEnTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredicaEnTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
