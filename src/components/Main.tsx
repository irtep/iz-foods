import { Container } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { IzFoodsContext } from '../context/izFoodsContext';
import OneColumnLayout from './OneColumnLayout';
import ThreeColumnLayout from './ThreeColumnLayout';

const Main: React.FC = (): React.ReactElement => {
    const {
        isMobile,
        loadShoppingList
    } = useContext(IzFoodsContext);

    useEffect( () => {
        loadShoppingList();
    }, []);
    return (
        <Container sx={{
            color: "rgb(0,0,80)",
            borderRadius: 2,
            margin: 1,
            padding: 1
        }}>
            {
                (isMobile)
                    ? <OneColumnLayout />
                    : <ThreeColumnLayout />
            }
        </Container>
    );
}

export default Main;