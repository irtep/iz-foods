import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { IzFoodsContext } from '../context/izFoodsContext';
import { Ingredient } from '../data/plates';
import { NonFood } from '../data/non-foods';

const ShoppingBasket: React.FC = (): React.ReactElement => {

    const {
        selectedToList,
        setSelectedToList
    } = useContext(IzFoodsContext);

    return (
        <Container>
            {
                selectedToList.map((elem: Ingredient | NonFood) => {
                    return (
                        <Container
                            sx={{
                                margin: 1
                            }}
                            key={`atBasket:${elem.name}${elem.id}`}
                            onClick={() => {
                                setSelectedToList((prevSelectedToList: Ingredient[] | NonFood[]) =>
                                    prevSelectedToList.filter((item) => item.name !== elem.name)
                                );
                            }}
                        >
                            {elem.name}
                        </Container>
                    )
                })
            }
        </Container>
    );
}

export default ShoppingBasket;