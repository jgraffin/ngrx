import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDialogsComponent } from './node-dialogs.component';

describe('NodeDialogsComponent', () => {
  let component: NodeDialogsComponent;
  let fixture: ComponentFixture<NodeDialogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeDialogsComponent]
    });
    fixture = TestBed.createComponent(NodeDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
