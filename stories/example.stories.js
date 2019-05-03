import React from 'react';
import { storiesOf } from '@storybook/react';
import MeuComponenteClassudo from '../src/Examples/Inheritance/MeuComponenteClassudo';
import StyledComponents from '../src/Examples/StyledComponents';

storiesOf('Exemplo :D', module)
  .add('Componente comum', () => <MeuComponenteClassudo />)
  .add('Componente estilizado!', () => <StyledComponents />);
