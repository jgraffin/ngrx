import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderComponent } from './folder.component';
import { FolderEmptyModule } from '../folder-empty/folder-empty.module';
import { DropdownActionsModule } from '../../dropdown-actions/dropdown-actions.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  exports: [FolderComponent],
  declarations: [FolderComponent],
  imports: [
    CommonModule,
    FolderEmptyModule,
    DropdownActionsModule,
    PipesModule,
  ],
})
export class FolderModule {}
