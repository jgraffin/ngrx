import { NgModule } from '@angular/core';
import { FolderEmptyComponent } from './folder-empty.component';
import { CommonModule } from '@angular/common';
import { DropdownActionsModule } from '../../dropdown-actions/dropdown-actions.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  exports: [FolderEmptyComponent],
  declarations: [FolderEmptyComponent],
  imports: [CommonModule, DropdownActionsModule, PipesModule],
})
export class FolderEmptyModule {}
