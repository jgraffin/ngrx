export interface DialogsItem {
  id: number;
  name: string;
  quantity: number;
}

export interface DialogsState {
  entities: DialogsItem[];
  isLoading: boolean;
}

export interface SizeState {
  fontSize: number;
}
