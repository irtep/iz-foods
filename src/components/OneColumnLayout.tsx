import React, { useContext } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import Foods from './Foods';
import Ingredients from './Ingredients';
import ShoppingBasket from './ShoppingBasket';
import { IzFoodsContext } from '../context/izFoodsContext';
import FreeField from './FreeField';

const OneColumnLayout: React.FC = () => {
    const {
        showFoods,
        showIngredients,
        showList
    } = useContext(IzFoodsContext);

    return (
        <Container>
            {
                (showFoods)
                    ?
                    <Paper elevation={3} sx={{ padding: 2, margin: 1 }}>
                        <Typography variant="h6">Ruuat</Typography>
                        <Foods />
                    </Paper>
                    : <></>
            }
            {
                (showIngredients)
                    ?
                    <Paper elevation={3} sx={{ padding: 2, margin: 1 }}>
                        <Typography variant="h6">Ainekset/Hyödykkeet</Typography>
                        <FreeField/>
                        <Ingredients />
                    </Paper>
                    : <></>
            }
            {
                (showList)
                    ?
                    <Paper elevation={3} sx={{ padding: 2, margin: 1 }}>
                        <Typography variant="h6">Ostoslista</Typography>
                        <ShoppingBasket />
                    </Paper>
                    : <></>
            }

        </Container>
    );
};

export default OneColumnLayout;