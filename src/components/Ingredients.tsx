import { Container, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Ingredient, ingredients } from '../data/plates';
import { NonFood, nonFoods } from '../data/non-foods';
import { IzFoodsContext } from '../context/izFoodsContext';

const Ingredients: React.FC = (): React.ReactElement => {
    const {
        selectedToList,
        setSelectedToList
    } = useContext(IzFoodsContext);

    return (
        <Container>
            {
                ingredients.map((ing: Ingredient, i: number) => {
                    if (!selectedToList.includes(ing)) {
                        return (
                            <Container
                                sx={{
                                    margin: 1
                                }}
                                key={`${ing.name} ${i}`}
                                onClick={() => {
                                    if (!selectedToList.includes(ing)) {
                                        setSelectedToList([
                                            ...selectedToList,
                                            ing
                                        ]);
                                    }
                                }}
                            >
                                {ing.name}
                            </Container>
                        )
                    }
                })
            }
            <Typography>
                --
            </Typography>
            {
                nonFoods.map((nF: NonFood, i: number) => {
                    if (!selectedToList.includes(nF)) {
                        return (
                            <Container
                                sx={{
                                    margin: 1
                                }}
                                key={`${nF.name} ${i}`}
                                onClick={() => {
                                    if (!selectedToList.includes(nF)) {
                                        setSelectedToList([
                                            ...selectedToList,
                                            nF
                                        ]);
                                    }
                                }}
                            >
                                {nF.name}
                            </Container>
                        )
                    }
                })
            }
        </Container>
    );
}

export default Ingredients;