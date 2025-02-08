
export interface CredentialsTypes {
  id?: number
  page: string
  username: string
  password: string
}

export interface SelectedProps {
  id?: number | string
  action: string
}

export interface UserPswChangeData {
  token: string
  oldPassword: string
  newPassword: string
}

export interface IngredientAtBasket {
  name: string;
  quantity: number;
  type: string;
}