import { Alert, Container, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { IzFoodsContext } from '../context/izFoodsContext';
import NavButtons from './NavButtons';
/*
import Login from './Login';
import Register from './Register';
*/
const Header: React.FC = (): React.ReactElement => {
    const {
        message,
        /*
        loginDialogOpen,
        registerDialogOpen
        */
    } = useContext(IzFoodsContext);

    return (
        <Container sx={{
            background: "rgb(0,0,80)",
            backgroundImage: "darkBlue",
            color: "green",
            borderRadius: 2,
            margin: 1,
            textAlign: "center",
            width: "100vw"
        }}>
            <Typography variant="h4">
                iz
                <span style={{ color: "lightGreen" }}>
                    Foods
                </span>
            </Typography>

            <NavButtons />

            <Container>
                { // if message, show it here:
                    (message !== '')
                        ? <Alert severity="error">{message}</Alert>
                        : <></>
                }
            </Container>

        </Container>
    );
}

export default Header;