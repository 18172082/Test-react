import React from "react";
import { Box, Typography } from "@mui/material";
const Resultado = ({ resultado }) => {
    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                maxWidth: 400,
                margin: "10px auto",
                padding: 2,
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f0f4ff",
            }}
        >
            <Typography variant="h6">
                Resultado:
            </Typography>
            <Typography variant="h6">
                {resultado}
            </Typography>
        </Box>
    );
};

export default Resultado;
