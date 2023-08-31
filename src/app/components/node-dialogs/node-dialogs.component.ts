import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDialogs } from 'src/app/dialogs/store/dialogs.actions';

type StylesType = {
  children: string;
  elementClassName: string;
  folderElement: string;
  isActive: string;
  isVisible: string;
};
@Component({
  selector: 'app-node-dialogs',
  templateUrl: './node-dialogs.component.html',
  styleUrls: ['./node-dialogs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NodeDialogsComponent implements OnInit {
  @Input() data!: any;
  @Input() size!: number;
  @ViewChild('dialogContent') dialogContent!: any;
  value!: number;

  dialogs: any[] = [];
  dialogsNew: any[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadDialogs());

    this.dialogs = this.data.data.map((values: any) => values);

    const data = this.dialogs.map((item: any) => ({
      ...item,
      children:
        item.parent ??
        this.dialogs.filter((itemChild) => itemChild.parent === item.id),
    }));

    this.dialogsNew = data;

    console.log(this.dialogsNew);
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
      const nextChildren = currElem.querySelectorAll(`.${styles.isVisible}`);

      if (!currElem.classList.contains(styles.isVisible)) {
        this.addClass(currElem, children, stack, styles);
      } else {
        this.removeClass(currElem, children, stack, styles);
      }

      this.removeNextChildrenVisibility(nextChildren, styles);
    }
  }

  addClass(currElem: any, children: any, stack: any, styles: any) {
    currElem.classList.add(styles.isVisible);
    children.classList.add(styles.isVisible);
    stack.classList.add(styles.isActive);
  }

  removeClass(currElem: any, children: any, stack: any, styles: any) {
    currElem.classList.remove(styles.isVisible);
    children.classList.remove(styles.isVisible);
    stack.classList.remove(styles.isActive);
  }

  removeNextChildrenVisibility(next: HTMLElement[], styles: StylesType) {
    next.forEach((el: HTMLElement) => {
      const stackDetail = el.querySelector(`.${styles.isActive}`);

      stackDetail !== null
        ? stackDetail?.classList.remove(styles.isActive)
        : null;

      el.classList.remove(styles.isVisible);
    });
  }
}
