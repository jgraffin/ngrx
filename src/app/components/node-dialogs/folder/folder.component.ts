import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

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
  @Input() children?: any = [];
  @Input() hasActions = false;
  @Input() className?: string;
  @Output() toggleEmitter = new EventEmitter();

  onInvokeEvent(event: Event) {
    this.toggleEmitter.emit(event);
  }

  openActions(event: any) {
    let current = event.target;
    const dropDownElement = event.target.nextElementSibling;

    const styles = {
      className: 'node-content-children',
      isActive: 'is-active',
    };

    while (current && !current.classList.contains(styles.className)) {
      current = current.parentElement;
    }

    if (!dropDownElement.classList.contains(styles.isActive)) {
      dropDownElement.classList.add(styles.isActive);
      current.style.overflow = 'visible';
      current.style.zIndex = 5;
    } else {
      dropDownElement.classList.remove(styles.isActive);
      current.removeAttribute('style');
    }
  }
}
