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

  dialogs: any[] = [];
  dialogsChildren = {
    total: 4,
    currentPage: 0,
    pageSize: 4,
    data: [
      {
        id: 'teste item filho',
        workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
        title: 'teste item filho titulo',
        conditions: 'teste item filho',
        previousSibling: 'node_99ea11cd-7901-446f-bb90-7a3575a958d2',
        type: 'FRAME',
        outputs: [
          {
            id: 'ce2d87ac-aef8-42c5-93a6-d6c95d36fdf2',
            selectionPolicy: 'SEQUENTIAL',
            delimiter: null,
            values: ['Olá. Como posso te ajudar?'],
            type: 'TEXT',
          },
        ],
        slots: [],
        created: '2023-08-16T15:45:19.649+0000',
        updated: '2023-08-16T16:50:34.454+0000',
      },
    ],
  };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadDialogs());

    this.dialogs = this.data.data.map((values: any) => values);
    console.log(this.dialogs);
  }
}
