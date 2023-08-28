export interface DialogsItem {
  total: number;
  currentPage: number;
  pageSize: number;
  data: Array<{
    id: string;
    workspaceId: string;
    title: string;
    conditions: string;
    previousSibling: string;
    type: string;
    outputs: [
      {
        id: string;
        selectionPolicy: string;
        delimiter: null;
        values: string[];
        type: string;
      }
    ];
    slots: [];
    created: string;
    updated: string;
  }>;
}

export interface DialogsState {
  payload: DialogsItem;
}

export interface SizeState {
  fontSize: number;
}
