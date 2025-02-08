import { Checkbox, Container, IconButton } from '@mui/material';
import React, { useContext } from 'react';
import { IzFoodsContext } from '../context/izFoodsContext';
import { IngredientAtBasket } from '../sharedInterfaces/sharedInterfaces';
import DeleteIcon from "@mui/icons-material/Delete";

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
                        >
                            {elem.name} {elem.quantity} {elem.type}
                            <IconButton
                                onClick={
                                    () => {
                                        setSelectedToList((prevSelectedToList: IngredientAtBasket[]) =>
                                            prevSelectedToList.filter((item) => item.name !== elem.name)
                                        );
                                    }
                                } color="error">
                                <DeleteIcon />
                            </IconButton>
                            <Checkbox></Checkbox>
                        </Container>
                    )
                })
            }
        </Container>
    );
}

export default ShoppingBasket;