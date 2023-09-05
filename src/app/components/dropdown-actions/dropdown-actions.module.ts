import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownActionsComponent } from './dropdown-actions.component';

@NgModule({
  exports: [DropdownActionsComponent],
  declarations: [DropdownActionsComponent],
  imports: [CommonModule],
})
export class DropdownActionsModule {}
