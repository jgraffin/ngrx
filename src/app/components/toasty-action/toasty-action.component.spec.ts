import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastyActionComponent } from './toasty-action.component';

describe('ToastyActionComponent', () => {
  let component: ToastyActionComponent;
  let fixture: ComponentFixture<ToastyActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastyActionComponent]
    });
    fixture = TestBed.createComponent(ToastyActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
