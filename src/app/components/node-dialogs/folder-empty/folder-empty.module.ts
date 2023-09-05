import { NgModule } from '@angular/core';
import { FolderEmptyComponent } from './folder-empty.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [FolderEmptyComponent],
  declarations: [FolderEmptyComponent],
  imports: [CommonModule],
})
export class FolderEmptyModule {}
