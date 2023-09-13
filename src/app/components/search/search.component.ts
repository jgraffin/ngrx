import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchNodes } from '../../dialogs/store/dialogs.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent {
  @Input() counter!: any;

  constructor(private store: Store<{ searchNodeReducer: any }>) {}

  onQuery(event: Event) {
    const { target } = event;

    let searchQuery = {
      query: (target as HTMLInputElement).value,
    };

    this.store.dispatch(searchNodes(searchQuery));
  }
}
