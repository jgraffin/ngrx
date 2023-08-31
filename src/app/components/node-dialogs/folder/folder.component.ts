import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent {
  @Input() id?: string;
  @Input() type?: string;
  @Input() conditions?: string;
  @Input() title?: string;
  @Input() parent?: string;
  @Input() children?: any[] = [];
  @Output() toggleEmitter = new EventEmitter();

  onInvokeEvent(event: Event) {
    this.toggleEmitter.emit(event);
  }
}
