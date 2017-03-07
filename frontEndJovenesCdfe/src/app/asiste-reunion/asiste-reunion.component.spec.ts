import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsisteReunionComponent } from './asiste-reunion.component';

describe('AsisteReunionComponent', () => {
  let component: AsisteReunionComponent;
  let fixture: ComponentFixture<AsisteReunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsisteReunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsisteReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
