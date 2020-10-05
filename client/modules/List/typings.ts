export interface ShirtItem {
  name: string;
  color: string;
  size: number;
}

export interface PantItem {
  name: string;
  color: string;
  width: number;
  height: number;
}

export type ItemType = ShirtItem | PantItem;

export type ListType = ShirtItem[] | PantItem[];
