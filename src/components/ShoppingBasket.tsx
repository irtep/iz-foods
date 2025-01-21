import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { IzFoodsContext } from '../context/izFoodsContext';
import { Ingredient } from '../data/plates';
import { NonFood } from '../data/non-foods';
import { IngredientAtBasket } from '../sharedInterfaces/sharedInterfaces';

const ShoppingBasket: React.FC = (): React.ReactElement => {

    const {
        selectedToList,
        setSelectedToList
    } = useContext(IzFoodsContext);

    return (
        <Container>
            {
                selectedToList.map((elem: IngredientAtBasket, i: number) => {
                    return (
                        <Container
                            sx={{
                                margin: 1
                            }}
                            key={`atBasket:${elem.name}${i}`}
                            onClick={() => {
                                setSelectedToList((prevSelectedToList: IngredientAtBasket[]) =>
                                    prevSelectedToList.filter((item) => item.name !== elem.name)
                                );
                            }}
                        >
                            {elem.name} {elem.quantity} {elem.type}
                        </Container>
                    )
                })
            }
        </Container>
    );
}

export default ShoppingBasket;