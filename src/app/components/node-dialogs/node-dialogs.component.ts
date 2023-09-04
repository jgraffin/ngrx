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
@Component({
  selector: 'app-node-dialogs',
  templateUrl: './node-dialogs.component.html',
  styleUrls: ['./node-dialogs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NodeDialogsComponent implements OnInit {
  @Input() nodes!: NodesType;
  @Input() size!: number;

  dialogs!: any;

  constructor() {}

  ngOnInit(): void {
    const items = this.nodes.data?.map((values) => values);

    this.folderStructure(items);
  }

  folderStructure(items: any) {
    const allNodes = items.reduce(
      ({ nodes, roots }: any, item: any) => {
        // Cria a pasta nó
        const node =
          item.type === 'FOLDER' || item.type === 'STANDARD'
            ? { ...item, children: [], ...nodes.get(item.id) }
            : item;

        // Adiciona o nó ao mapa
        nodes.set(item.id, node);

        // Se não houver pasta pai, adiciona ao root
        if (!item.parent) {
          roots.push(node);
        } else {
          // Cria a pasta pai se não existir
          if (!nodes.has(item.parent))
            item.set({ id: item.parent, children: [] });

          // Adiciona nó filho
          nodes.get(item.parent).children.push(node);
        }

        return { nodes, roots };
      },
      { nodes: new Map(), roots: [] }
    ).roots; // Obtém a raíz

    this.dialogs = allNodes;
    console.log(this.dialogs);
  }

  toggleAccordionNode(event: any) {
    let current = event.target;

    const styles = {
      children: '.dialogs-content .children',
      className: 'dialogs-content--accordion',
      folderElement: '.dialogs-content >  div',
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
