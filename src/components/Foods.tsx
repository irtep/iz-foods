import { Button, Container } from '@mui/material';
import React, { useContext } from 'react';
import { IngredientWithQuantity, menus, Plate, ingredients, Ingredient } from '../data/plates';
import { IzFoodsContext } from '../context/izFoodsContext';
//import { NonFood } from '../data/non-foods';
import { IngredientAtBasket } from '../sharedInterfaces/sharedInterfaces';

const Foods: React.FC = (): React.ReactElement => {

    const {
        setSelectedToList
    } = useContext(IzFoodsContext);

    return (
        <Container>
            {
                menus.map((m: Plate, i: number) => {
                    return (
                        <>
                            <Button
                                sx={{
                                    color: 'black'
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
                                                        ticked: false
                                                    });
                                                }
                                            }
                                        });

                                        return updatedList;
                                    });
                                }}
                            >
                                {m.name}
                            </Button>
                            <br />
                        </>
                    );
                })
            }
        </Container>
    );
}

export default Foods;