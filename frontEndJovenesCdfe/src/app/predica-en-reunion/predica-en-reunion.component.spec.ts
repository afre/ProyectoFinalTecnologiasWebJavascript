import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredicaEnReunionComponent } from './predica-en-reunion.component';

describe('PredicaEnReunionComponent', () => {
  let component: PredicaEnReunionComponent;
  let fixture: ComponentFixture<PredicaEnReunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredicaEnReunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredicaEnReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
