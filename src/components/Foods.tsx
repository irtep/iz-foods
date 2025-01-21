import { Container } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { IngredientWithQuantity, menus, Plate, ingredients, Ingredient } from '../data/plates';
import { IzFoodsContext } from '../context/izFoodsContext';
//import { NonFood } from '../data/non-foods';
import { IngredientAtBasket } from '../sharedInterfaces/sharedInterfaces';

const Foods: React.FC = (): React.ReactElement => {

    const {
//        selectedToList,
        setSelectedToList
    } = useContext(IzFoodsContext);
/*
    useEffect(() => {
        console.log('fullList: ', selectedToList);
    });
*/
    return (
        <Container>
            {
                menus.map((m: Plate, i: number) => {
                    return (
                        <Container
                            sx={{
                                margin: 1,
                            }}
                            key={`${m.name} ${i}`}
                            onClick={() => {
                                setSelectedToList((prevSelectedToList: IngredientAtBasket[]) => {
                                    const updatedList: IngredientAtBasket[] = [...prevSelectedToList];

                                    m.ingredients.forEach((ing: IngredientWithQuantity) => {
                                        const ingredientDetails = ingredients.find(
                                            (e: Ingredient) => e.id === ing.id
                                        ); // Find the ingredient details based on ID

                                        if (ingredientDetails) {
                                            const existingIngredientIndex = updatedList.findIndex(
                                                (ingredient) => ingredient.name === ingredientDetails.name
                                            );

                                            if (existingIngredientIndex > -1) {
                                                // If ingredient exists, update the quantity
                                                updatedList[existingIngredientIndex].quantity += ing.quantity;
                                            } else {
                                                // Add new ingredient
                                                updatedList.push({
                                                    name: ingredientDetails.name,
                                                    quantity: ing.quantity,
                                                    type: ingredientDetails.type,
                                                });
                                            }
                                        }
                                    });

                                    return updatedList;
                                });
                            }}
                        >
                            {m.name}
                        </Container>
                    );
                })
            }
        </Container>
    );
}

export default Foods;