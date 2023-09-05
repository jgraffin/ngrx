import { NgModule } from '@angular/core';
import { FolderEmptyComponent } from './folder-empty.component';
import { CommonModule } from '@angular/common';
import { DropdownActionsModule } from '../../dropdown-actions/dropdown-actions.module';

@NgModule({
  exports: [FolderEmptyComponent],
  declarations: [FolderEmptyComponent],
  imports: [CommonModule, DropdownActionsModule],
})
export class FolderEmptyModule {}
