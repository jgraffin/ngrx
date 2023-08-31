import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderComponent } from './folder.component';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
  exports: [FolderComponent],
  declarations: [FolderComponent],
  imports: [CommonModule, DialogModule],
})
export class FolderModule {}
