
export interface SelectedProps {
  id?: number | string
  action: string
}

export interface IngredientAtBasket {
  name: string;
  quantity: number;
  type: string;
  ticked: boolean;
}