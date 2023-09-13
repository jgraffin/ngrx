import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-folder-empty',
  templateUrl: './folder-empty.component.html',
  styleUrls: ['./folder-empty.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FolderEmptyComponent {
  @Input() id?: string;
  @Input() type?: string;
  @Input() conditions?: string;
  @Input() title?: string;
  @Input() parent?: string;
  @Input() className?: string;

  constructor(private store: Store<{ searchNodeReducer: any }>) {}

  query$ = this.store.select('searchNodeReducer').pipe(map((e) => e.query));
}
