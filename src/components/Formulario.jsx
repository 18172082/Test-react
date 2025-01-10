import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Formulario = ({ onSubmit }) => {
    const [n, setN] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (n >= 2) {
            onSubmit(Number(n));
        } else {
            alert("Por favor, introduce un número mayor o igual a 2.");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                maxWidth: 400,
                margin: "0 auto",
                padding: 2,
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f0f4ff",
            }}
        >
            <Typography variant="h5" component="h1" gutterBottom>
                Calculadora de Serie
            </Typography>
            <TextField
                label="Introduce el valor de n"
                type="number"
                value={n}
                onChange={(e) => setN(e.target.value)}
                inputProps={{ min: 2 }}
                fullWidth
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Calcular
            </Button>
        </Box>
    );
};

export default Formulario;
