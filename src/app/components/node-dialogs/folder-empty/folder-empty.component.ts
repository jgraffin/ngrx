import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-folder-empty',
  templateUrl: './folder-empty.component.html',
  styleUrls: ['./folder-empty.component.scss'],
})
export class FolderEmptyComponent {
  @Input() id?: string;
  @Input() type?: string;
  @Input() conditions?: string;
  @Input() title?: string;
  @Input() parent?: string;
  @Input() className?: string;
}
