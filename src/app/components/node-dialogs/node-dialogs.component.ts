import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDialogs } from 'src/app/dialogs/store/dialogs.actions';

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

  constructor() {}

  ngOnInit(): void {
    const items = this.nodes.data?.map((values) => values);

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
      children: '.node-content .children',
      className: 'node-content-children',
      folderElement: '.node-content >  div',
      isActive: 'is-active',
      isVisible: 'is-visible',
    };

    while (current && !current.classList.contains(styles.className)) {
      current = current.parentElement;
    }

    if (current && current.classList.contains(styles.className)) {
      const children = current.querySelector(styles.children);
      const folder = current.querySelector(styles.folderElement);
      const nextChildren = current.querySelectorAll(`.${styles.isVisible}`);
      const stack = folder.parentElement.nextElementSibling;

      if (!current.classList.contains(styles.isVisible)) {
        this.addClass(current, children, stack, styles);
      } else {
        this.remClass(current, children, stack, styles);
      }

      this.remNextChildrenVisibility(nextChildren, styles);
    }
  }
  addClass(el: HTMLElement, ch: HTMLElement, cl: HTMLElement, st: StylesType) {
    el.classList.add(st.isVisible);
    ch.classList.add(st.isVisible);
    cl.classList.add(st.isActive);
  }

  remClass(el: HTMLElement, ch: HTMLElement, cl: HTMLElement, st: StylesType) {
    el.classList.remove(st.isVisible);
    ch.classList.remove(st.isVisible);
    cl.classList.remove(st.isActive);
  }

  remNextChildrenVisibility(next: HTMLElement[], st: StylesType) {
    next.forEach((el: HTMLElement) => {
      const stack = el.querySelector(`.${st.isActive}`);

      stack !== null ? stack?.classList.remove(st.isActive) : null;

      el.classList.remove(st.isVisible);
    });
  }
}
