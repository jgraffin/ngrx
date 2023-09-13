import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

type StylesType = {
  children: string;
  className: string;
  folderElement: string;
  isActive: string;
  isVisible: string;
};

type NodesType = {
  total?: number;
  currentPage?: number;
  pageSize?: number;
  data?: Array<{
    id: string;
    workspaceId?: string;
    title?: string;
    description?: string;
    conditions: string;
    type: string;
    created?: string;
    updated?: string;
  }>;
};

interface FolderNode {
  id: string;
  type: 'FOLDER' | 'STANDARD';
  parent?: number;
  children?: FolderNode[];
  conditions?: string;
  title?: string;
}
@Component({
  selector: 'app-node-dialogs',
  templateUrl: './node-dialogs.component.html',
  styleUrls: ['./node-dialogs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NodeDialogsComponent implements OnInit {
  @Input() nodes!: NodesType;
  @Input() size!: number;

  dialogs!: FolderNode[];

  constructor(private store: Store<{ dropDownActionsReducer: any }>) {}

  dropdownAction$ = this.store
    .select('dropDownActionsReducer')
    .pipe(map((e) => e.show));

  ngOnInit(): void {
    const items = this.nodes.data?.map((values) => values) as NodesType;

    this.folderStructure(items);
  }

  folderStructure(items: any) {
    const nodesMap = new Map<number, FolderNode>();
    const roots: FolderNode[] = [];

    // Primeiro, popula o mapa de nós e identifica a raíz
    for (const item of items) {
      // Clona o item para evitar modificar o dado original
      const node: FolderNode = { ...item, children: [] };

      // Adiciona o nó ao mapa
      nodesMap.set(item.id, node);

      if (item.parent === undefined) {
        roots.push(node);
      }
    }

    // Segundo, conecta nós filhos aos seus nós pais
    for (const item of items) {
      if (item.parent !== undefined) {
        const parentNode = nodesMap.get(item.parent);

        if (parentNode) {
          parentNode?.children?.push(nodesMap.get(item.id)!);
        }
      }
    }

    this.dialogs = roots;
    console.log(this.dialogs);
  }

  toggleAccordionNode(event: any) {
    let current = event.target;

    const styles = {
      actionButton: '.content .actions-button',
      children: '.node .children',
      className: 'node',
      folderElement: '.node >  div',
      isActive: 'is-active',
      isVisible: 'is-visible',
    };

    while (current && !current.classList.contains(styles.className)) {
      current = current.parentElement;
    }

    if (current && current.classList.contains(styles.className)) {
      const children = current.querySelector(styles.children);
      const actionButton = current.querySelector(styles.actionButton);
      const nextChildren = current.querySelectorAll(`.${styles.isVisible}`);

      if (!current.classList.contains(styles.isVisible)) {
        children.classList.add(styles.isVisible);
        current.classList.add(styles.isVisible);
        actionButton.classList.add(styles.isActive);
      } else {
        children.classList.remove(styles.isVisible);
        current.classList.remove(styles.isVisible);
        actionButton.classList.remove(styles.isActive);
      }

      this.removeNextChildrenVisibility(nextChildren, styles);
    }
  }

  removeNextChildrenVisibility(next: HTMLElement[], styles: StylesType) {
    next.forEach((el: HTMLElement) => {
      const dropDown = el.querySelector(`.${styles.isActive}`);
      const stack = el.querySelector(`.${styles.isActive}`);

      stack !== null ? stack?.classList.remove(styles.isActive) : null;

      dropDown?.nextElementSibling?.classList.remove(styles.isActive);
      el.classList.remove(styles.isVisible);
    });
  }
}
