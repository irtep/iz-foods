import { useContext, useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { IzFoodsContext } from "../context/izFoodsContext";

const FreeField: React.FC = () => {
    const [tempValue, setTempValue] = useState<string>("");   // Temporary input

    const {
        selectedToList,
        setSelectedToList
    } = useContext(IzFoodsContext);

    return (
        <Stack spacing={2}>
            <TextField
                label="Manuaalinen hyödyke"
                variant="outlined"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                fullWidth
                margin="normal"
            />
            {
                (tempValue !== '')
                    ? <>
                        <Button
                            variant="contained"
                            onClick={() => {
                                setSelectedToList([
                                    ...selectedToList,
                                    {
                                        name: tempValue,
                                        quantity: 1,
                                        type: 'kpl',
                                        ticked: false
                                    },
                                ]);
                                setTempValue('');
                            }}
                        >
                            Lisää tuote/hyödyke
                        </Button>
                    </>
                    : <></>
            }
        </Stack>
    );
};

export default FreeField;
