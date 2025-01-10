import React, { useState } from "react";
import Formulario from "./components/Formulario";
import SerieCalculator from "./components/SerieCalculator";
import Resultado from "./components/Resultado";
import { Container } from "@mui/material";

const App = () => {
    const [resultado, setResultado] = useState(null);

    const handleCalcular = (n) => {
        const resultado = SerieCalculator(n);
        setResultado(resultado);
    };
    return (
        <Container maxWidth="L"
            sx={{
                bgcolor: '#cfe8fc', height: '100vh',
            }}>
            <div>
                <Formulario onSubmit={handleCalcular} />
                {resultado !== null && <Resultado resultado={resultado} />}
            </div>
        </Container>
    );
};
export default App;
