import React, { useState } from 'react';
import * as Style from './style';
const MeuBeloComponente = () => {
    const [error, setError] = useState(false);

    return (
        <Style.Container>
            <Style.Titulo>
                Olha que massa estes componentes
            </Style.Titulo>
            <Style.Paragrafo error={error}>
                Clique no botão para me alternar!
            </Style.Paragrafo>
            <Style.AlternaError onClick={ () => setError(!error) }>
                Aqui mesmo!
            </Style.AlternaError>
            <Style.Line />
            <Style.Paragrafo margin="15px 5px 0px">
                Animação aleatória:
            </Style.Paragrafo>
            <Style.BolaAleatoria />
        </Style.Container>
    )
};

export default MeuBeloComponente
