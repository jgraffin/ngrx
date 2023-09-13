import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsComponent } from './dialogs.component';
import { DialogsRoutingModule } from './dialogs.routing.module';
import { NodeDialogsFormComponent } from '../components/node-dialogs-form/node-dialogs-form.component';
import { NodeDialogsComponent } from '../components/node-dialogs/node-dialogs.component';
import { SearchComponent } from '../components/search/search.component';
import { SliderComponent } from '../components/slider/slider.component';
import { ToastyActionComponent } from '../components/toasty-action/toasty-action.component';
import { StoreModule } from '@ngrx/store';
import {
  SizeReducer,
  DialogsReducer,
  SearchNodeReducer,
  DropDownActionsReducer,
} from './store/dialogs.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FolderEmptyModule } from '../components/node-dialogs/folder-empty/folder-empty.module';
import { FolderModule } from '../components/node-dialogs/folder/folder.module';
import { DropdownActionsModule } from '../components/dropdown-actions/dropdown-actions.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    DialogsRoutingModule,
    DropdownActionsModule,
    FolderEmptyModule,
    FolderModule,
    PipesModule,
    StoreModule.forRoot({
      sizeReducer: SizeReducer,
      searchNodeReducer: SearchNodeReducer,
      dialogsReducer: DialogsReducer,
      dropDownActionsReducer: DropDownActionsReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  declarations: [
    DialogsComponent,
    SearchComponent,
    SliderComponent,
    NodeDialogsComponent,
    NodeDialogsFormComponent,
    ToastyActionComponent,
  ],
})
export class DialogsModule {}
