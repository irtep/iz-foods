import { Button, Container, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Ingredient, ingredients } from '../data/plates';
import { NonFood, nonFoods } from '../data/non-foods';
import { IzFoodsContext } from '../context/izFoodsContext';
import { IngredientAtBasket } from '../sharedInterfaces/sharedInterfaces';

const Ingredients: React.FC = (): React.ReactElement => {
    const {
        selectedToList,
        setSelectedToList
    } = useContext(IzFoodsContext);

    return (
        <Container>
            {
                ingredients.map((ing: Ingredient, i: number) => {
                    return (
                        <>
                        <Button
                            sx={{
                                color: 'black'
                            }}
                            key={`${ing.name} ${i}`}
                            onClick={() => {
                                const ingredientIndex = selectedToList.findIndex(
                                    (item: IngredientAtBasket) => item.name === ing.name
                                );

                                if (ingredientIndex === -1) {
                                    // Ingredient not in the list, add it
                                    setSelectedToList([
                                        ...selectedToList,
                                        {
                                            name: ing.name,
                                            quantity: ing.defaultQuantity,
                                            type: ing.type,
                                            ticked: false
                                        },
                                    ]);
                                } else {
                                    // Ingredient already in the list, update its quantity
                                    setSelectedToList(
                                        selectedToList.map((item: IngredientAtBasket, index: number) =>
                                            index === ingredientIndex
                                                ? { ...item, quantity: item.quantity + ing.defaultQuantity }
                                                : item
                                        )
                                    );
                                }
                            }}
                        >
                            {ing.name}
                        </Button>
                        <br/>
                        </>
                    )
                })
            }
            <Typography>
                --
            </Typography>
            {
                nonFoods.map((nF: NonFood, i: number) => {
                    return (
                        <>
                        <Button
                            sx={{
                                color: 'black'
                            }}
                            key={`${nF.name} ${i}`}
                            onClick={() => {
                                const ingredientIndex = selectedToList.findIndex(
                                    (item: IngredientAtBasket) => item.name === nF.name
                                );

                                if (ingredientIndex === -1) {
                                    // Ingredient not in the list, add it
                                    setSelectedToList([
                                        ...selectedToList,
                                        {
                                            name: nF.name,
                                            quantity: nF.defaultQuantity,
                                            type: nF.type
                                        },
                                    ]);
                                } else {
                                    // Ingredient already in the list, update its quantity
                                    setSelectedToList(
                                        selectedToList.map((item: IngredientAtBasket, index: number) =>
                                            index === ingredientIndex
                                                ? { ...item, quantity: item.quantity + nF.defaultQuantity }
                                                : item
                                        )
                                    );
                                }
                            }}
                        >
                            {nF.name}
                        </Button>
                        <br/>
                        </>
                    )
                })
            }
        </Container>
    );
}

export default Ingredients;