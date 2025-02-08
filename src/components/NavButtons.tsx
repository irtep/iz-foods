import { Button, Container, Switch, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { IzFoodsContext } from '../context/izFoodsContext';

const NavButtons: React.FC = (): React.ReactElement => {

    const {
        isMobile,
        showFoods,
        setShowFoods,
        showIngredients,
        setShowIngredients,
        showList,
        setShowList,
        saveShoppingList,
        emptyList
    } = useContext(IzFoodsContext);

    return (
        <Container
            sx={{
                margin: 2
            }}
        >
            {
                (isMobile)
                    ? <>
                        <Typography
                            sx={{
                                color: 'white'
                            }}
                        >
                            Ruuat
                            <Switch
                                checked={showFoods}
                                onChange={(e) => {
                                    setShowFoods(e.target.checked);
                                }}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </Typography>
                        <Typography
                            sx={{
                                color: 'white'
                            }}
                        >
                            Ainekset
                            <Switch
                                checked={showIngredients}
                                onChange={(e) => {
                                    setShowIngredients(e.target.checked);
                                }}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </Typography>
                        <Typography
                            sx={{
                                color: 'white'
                            }}
                        >
                            Ostoslista
                            <Switch
                                checked={showList}
                                onChange={(e) => {
                                    setShowList(e.target.checked);
                                }}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </Typography>
                    </>
                    : <></>
            }
            <Button
                sx={{
                    background: 'green',
                    color: 'white',
                    margin: 1
                }}
                onClick={ () => {
                    saveShoppingList();
                }}
            >
                Tallenna
            </Button>
            <Button
                sx={{
                    background: 'darkRed',
                    color: 'white',
                    margin: 1
                }}
                onClick={ () => {
                    emptyList();
                }}
            >
                Tyhjennä
            </Button>
        </Container>
    );
}

export default NavButtons;