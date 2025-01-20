import { Button, Container, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { IzFoodsContext } from '../context/izFoodsContext';

const NavButtons: React.FC = (): React.ReactElement => {

    const {
        username,
        logUserOut,
        setLoginDialogOpen,
        setRegisterDialogOpen
    } = useContext(IzFoodsContext);

    return (
        <Container
            sx={{
                margin: 2
            }}
        >
            {/* Buttons, while not logged in: */}

            {(username === '')
                ? <>
                    <Button
                        sx={{
                            margin: 1,
                            background: "rgb(0,0,80)",
                            color: "white",
                            border: "1px solid white"
                        }}
                        onClick={() => {
                           setLoginDialogOpen(true);
                        }}>
                        Kirjaudu sisään
                    </Button>
                    <Button
                        sx={{
                            background: "darkgreen",
                            color: "white"
                        }}
                        onClick={() => {
                           setRegisterDialogOpen(true);
                        }}>
                        Rekisteröidy
                    </Button>
                </>
                : <>

                {/* Buttons, while logged in */}
                    <Typography>{`Kirjautunut: ${username} `}</Typography>

                    <Button
                        sx={{
                            margin: 1,
                            background: "rgb(0,0,80)",
                            color: "white",
                            border: "1px solid white"
                        }}
                        size="small"
                        onClick={() => {
                            logUserOut()
                        }}>
                        Kirjaudu ulos
                    </Button>

                    <Button
                        sx={{
                            margin: 1,
                            background: "rgb(0,0,80)",
                            color: "white",
                            border: "1px solid white"
                        }}
                        onClick={() => {  }}
                    >
                        Tallenna ostoskori
                    </Button>

                    <Button
                        sx={{
                            margin: 1,
                            background: "rgb(0,0,80)",
                            color: "white",
                            border: "1px solid white"
                        }}
                        onClick={() => { 
                           // navigate("/settings") 
                        }}
                        color="secondary">
                        Omat asetukset
                    </Button>
                </>
            }
        </Container>
    );
}

export default NavButtons;