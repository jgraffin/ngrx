import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('dialogContent') dialogContent!: any;
  value!: number;

  dialogs: any[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadDialogs());

    this.dialogs = this.data.data.map((values: any) => values);
    console.log(this.dialogs);
  }

  toggleAccordionNode(event: any) {
    let currElem = event.target;

    const styles = {
      children: '.dialogs-content .children',
      elementClassName: 'dialogs-content--accordion',
      folderElement: '.dialogs-content >  div',
      isActive: 'is-active',
      isVisible: 'is-visible',
    };

    while (currElem && !currElem.classList.contains(styles.elementClassName)) {
      currElem = currElem.parentElement;
    }

    if (currElem && currElem.classList.contains(styles.elementClassName)) {
      const folder = currElem.querySelector(styles.folderElement);
      const children = currElem.querySelector(styles.children);
      const stack = folder.parentElement.nextElementSibling;

      if (!currElem.classList.contains(styles.isVisible)) {
        currElem.classList.add(styles.isVisible);
        children.classList.add(styles.isVisible);
        stack.classList.add(styles.isActive);
      } else {
        currElem.classList.remove(styles.isVisible);
        children.classList.remove(styles.isVisible);
        stack.classList.remove(styles.isActive);
      }
    }
  }
}
