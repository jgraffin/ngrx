import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderComponent } from './folder.component';
import { FolderEmptyModule } from '../folder-empty/folder-empty.module';

@NgModule({
  exports: [FolderComponent],
  declarations: [FolderComponent],
  imports: [CommonModule, FolderEmptyModule],
})
export class FolderModule {}
