import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SizeState, DialogsItem, DialogsState } from './store/dialogs.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss'],
})
export class DialogsComponent {
  constructor(
    private store: Store<{
      sizeReducer: SizeState;
      dialogsReducer: DialogsItem;
    }>
  ) {}

  dialogs$ = this.store.pipe(select('dialogsReducer'));
  size$ = this.store.select('sizeReducer').pipe(map((e) => e.fontSize));
}
