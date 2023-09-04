import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [DialogComponent],
  declarations: [DialogComponent],
  imports: [CommonModule],
})
export class DialogModule {}
