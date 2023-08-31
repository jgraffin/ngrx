import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderComponent } from './folder.component';

@NgModule({
  exports: [FolderComponent],
  declarations: [FolderComponent],
  imports: [CommonModule],
})
export class FolderModule {}
