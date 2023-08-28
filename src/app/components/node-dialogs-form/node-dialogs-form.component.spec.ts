import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDialogsFormComponent } from './node-dialogs-form.component';

describe('NodeDialogsFormComponent', () => {
  let component: NodeDialogsFormComponent;
  let fixture: ComponentFixture<NodeDialogsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeDialogsFormComponent]
    });
    fixture = TestBed.createComponent(NodeDialogsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
