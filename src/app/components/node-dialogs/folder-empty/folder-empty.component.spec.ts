import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderEmptyComponent } from './folder-empty.component';

describe('FolderEmptyComponent', () => {
  let component: FolderEmptyComponent;
  let fixture: ComponentFixture<FolderEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolderEmptyComponent],
    });
    fixture = TestBed.createComponent(FolderEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
