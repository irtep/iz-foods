import React, { createContext, useEffect, useState } from 'react';
import { IngredientAtBasket } from '../sharedInterfaces/sharedInterfaces.ts';
import useIsMobile from '../customHooks/useIsMobile';
/*
import { Ingredient } from '../data/plates.ts';
import { NonFood } from '../data/non-foods.ts';
*/
export const IzFoodsContext: React.Context<any> = createContext(undefined);

interface Props {
  children: React.ReactNode;
}

export const IzFoodsProvider: React.FC<Props> = (props: Props): React.ReactElement => {
  const [message, setMessage] = useState<string>('');
  const [selectedToList, setSelectedToList] = useState<IngredientAtBasket[]>([]);
  const [showFoods, setShowFoods] = useState<boolean>(true);
  const [showIngredients, setShowIngredients] = useState<boolean>(true);
  const [showList, setShowList] = useState<boolean>(true);
  const isMobile: boolean = useIsMobile();

  const saveShoppingList = (): void => {
    localStorage.setItem("shoppingList", JSON.stringify(selectedToList));
  }

  const emptyList = (): void => {
    localStorage.setItem("shoppingList", JSON.stringify([]));
    setSelectedToList([]);
  }

  const loadShoppingList = (): void => {
    let storedList = localStorage.getItem("shoppingList");

    if (storedList !== null) {
      setSelectedToList(JSON.parse(storedList));
    } else {
      setSelectedToList([]);
    }
  }

  useEffect(() => {
    // logs in, if user did not logged out
    //const loggedUserJSON = window.localStorage.getItem('uDetails');

    //if (loggedUserJSON) {
    //const user = JSON.parse(loggedUserJSON);
    //setToken(user.token);
    // fetches users saved credentials
    //}
  }, []);


  return (
    <IzFoodsContext.Provider value={{
      message, setMessage,
      isMobile,
      selectedToList,
      setSelectedToList,
      showFoods, setShowFoods,
      showIngredients, setShowIngredients,
      showList, setShowList,
      saveShoppingList,
      loadShoppingList,
      emptyList
    }}>
      {props.children}
    </IzFoodsContext.Provider>
  );
}
