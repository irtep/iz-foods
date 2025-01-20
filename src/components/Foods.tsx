import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { IngredientWithQuantity, menus, Plate, ingredients, Ingredient } from '../data/plates';
import { IzFoodsContext } from '../context/izFoodsContext';
import { NonFood } from '../data/non-foods';

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
                                margin: 1
                            }}
                            key={`${m.name} ${i}`}
                            onClick={() => {
                                setSelectedToList((prevSelectedToList: Ingredient[] | NonFood[]) => {
                                    const newIngredients = m.ingredients
                                        .map((ing: IngredientWithQuantity) => ingredients[ing.id]) // Map to ingredient objects
                                        .filter((ingredient) => !prevSelectedToList.includes(ingredient)); // Filter out existing ones

                                    return [...prevSelectedToList, ...newIngredients];
                                });
                            }}
                        >
                            {m.name}
                        </Container>
                    )
                })
            }
        </Container>
    );
}

export default Foods;