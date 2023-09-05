import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-actions',
  templateUrl: './dropdown-actions.component.html',
  styleUrls: ['./dropdown-actions.component.scss'],
})
export class DropdownActionsComponent {
  @Output() dropDownEmitter = new EventEmitter();

  onInvokeDropDownEvent(event: any) {
    let current = event.target;
    const isActive = 'is-active';

    !current.classList.contains(isActive)
      ? current.classList.add(isActive)
      : current.classList.remove(isActive);

    this.dropDownEmitter.emit(event);
  }
}
