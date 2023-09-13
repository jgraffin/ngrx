import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-actions',
  templateUrl: './dropdown-actions.component.html',
  styleUrls: ['./dropdown-actions.component.scss'],
})
export class DropdownActionsComponent {
  @Output() actionsEmitter = new EventEmitter();

  actions = [
    {
      text: 'Novo diálogo filho',
      action: 'newDialogChild',
    },
    {
      text: 'Nova pasta filha',
      action: 'newFolderChild',
    },
    {
      text: 'Alterar',
      action: 'toAlter',
    },
    {
      text: 'Duplicar',
      action: 'toDuplicate',
    },
    {
      text: 'Excluir',
      action: 'toDelete',
    },
    {
      text: 'Mover',
      action: 'toMove',
    },
  ];

  onInvokeActionEvent(event: any) {
    this.actionsEmitter.emit(event);
  }
}
