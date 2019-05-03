import React from 'react';
import MeuComponenteClassudo from '../src/Examples/Inheritance/MeuComponenteClassudo';
import StyledComponents from '../src/Examples/StyledComponents';
import { storiesOf } from '@storybook/react';

storiesOf('Exemplo :D', module)
  .add('Componente comum', () => <MeuComponenteClassudo />)
  .add('Componente estilizado!', () => <StyledComponents />);
