import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDialogs } from 'src/app/dialogs/store/dialogs.actions';
import { DialogsItem, DialogsState } from 'src/app/dialogs/store/dialogs.state';

@Component({
  selector: 'app-node-dialogs',
  templateUrl: './node-dialogs.component.html',
  styleUrls: ['./node-dialogs.component.scss'],
})
export class NodeDialogsComponent implements OnInit {
  @Input() data!: any;
  @Input() size!: number;
  value!: number;

  dialogs: DialogsItem[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadDialogs());

    this.dialogs = this.data.entities.map((values: DialogsState) => values);
  }
}
