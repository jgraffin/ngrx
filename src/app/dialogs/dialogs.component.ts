import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SizeState, DialogsItem } from './store/dialogs.state';
import { map } from 'rxjs';
import { DropDownActionsReducer } from './store/dialogs.reducer';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.sass'],
})
export class DialogsComponent implements OnInit {
  values!: any;
  counter!: any;

  constructor(
    private store: Store<{
      searchNodeReducer: any;
      sizeReducer: SizeState;
      dialogsReducer: DialogsItem;
      dropDownActionsReducer: any;
    }>
  ) {}

  query$ = this.store.select('searchNodeReducer').pipe(map((e) => e.query));
  dialogs$ = this.store.pipe(select('dialogsReducer'));
  size$ = this.store.select('sizeReducer').pipe(map((e) => e.fontSize));
  dropdownAction$ = this.store
    .select('dropDownActionsReducer')
    .pipe(map((e) => e.show));

  ngOnInit(): void {
    // Array de nós: Inscrição para obter os dados da store
    this.dialogs$.subscribe({
      next: (item) => (this.values = item.data),
      error: (err) => console.error('An error occurred', err),
      complete: () => console.log('It has been completed'),
    });

    // Inscrição para obter o texto contido na store,
    // a fim de comparar o tamanho da string
    this.query$.subscribe({
      next: (text) => {
        const filtered = this.values.filter((currentText: any) =>
          currentText.conditions.toLowerCase().includes(text?.toLowerCase())
        );

        if (!text || text === undefined) this.counter = 0;
        else this.counter = filtered;
      },
    });
  }
}
