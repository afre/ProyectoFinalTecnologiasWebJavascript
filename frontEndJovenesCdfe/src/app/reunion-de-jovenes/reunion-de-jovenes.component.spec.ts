import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionDeJovenesComponent } from './reunion-de-jovenes.component';

describe('ReunionDeJovenesComponent', () => {
  let component: ReunionDeJovenesComponent;
  let fixture: ComponentFixture<ReunionDeJovenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReunionDeJovenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionDeJovenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
