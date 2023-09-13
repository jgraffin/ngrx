import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { dropdownActions } from '../../../dialogs/store/dialogs.actions';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class FolderComponent {
  @Input() id?: string;
  @Input() type?: string;
  @Input() conditions?: string;
  @Input() title?: string;
  @Input() parent?: string;
  @Input() children?: any = [];
  @Input() hasActions = false;
  @Input() className?: string;
  @Input() filtered!: any;
  @Output() toggleEmitter = new EventEmitter();

  constructor(
    private store: Store<{
      searchNodeReducer: any;
    }>
  ) {}

  query$ = this.store.select('searchNodeReducer').pipe(map((e) => e.query));

  onInvokeEvent(event: Event) {
    this.toggleEmitter.emit(event);
  }

  openActions(event: any): any {
    const { target } = event;

    switch (target.id) {
      case 'toAlter':
        this.store.dispatch(dropdownActions({ show: true }));
        break;
      default:
        return '';
    }
  }
}
