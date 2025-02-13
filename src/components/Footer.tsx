import { Container, Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = (): React.ReactElement => {

    return (
        <Container sx={{
            color: "rgb(0,0,80)",
            background: "rgb(55, 137, 196)",
            margin: 1,
            padding: 1
        }}>
            <Typography>
                Version: 1.0.7
            </Typography>   
        </Container>
    );
}

export default Footer;