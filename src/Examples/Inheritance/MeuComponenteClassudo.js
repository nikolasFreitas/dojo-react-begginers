import React from 'react';
import PrimeiroComponenteFilhoClassudo from './ChildComponent';

class MeuComponenteClassudo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filhoMontado: false,
      montarFilho: false,
    };

    this.montou = this.montou.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        montarFilho: true,
      })
    }, 2000);
  }
  avisaQueDesmontou = () => {
    this.setState({
      filhoMontado: false,
    });
  }

  montou() {
    this.setState({
      filhoMontado: true,
    });
  }

  render() {
    const filhoMontado = this.state.filhoMontado;
    const text = filhoMontado ? 'montou!' : 'Aguardando montar';

    const child = this.state.montarFilho && <PrimeiroComponenteFilhoClassudo avisaQueMontou={this.montou} avisaQueDesmontou={this.avisaQueDesmontou} />;

    return (
      <div>
        <h1>{text}</h1>
        {child}
        {filhoMontado && <button onClick={() => this.setState({
          montarFilho: false,
        })}>Desmontar</button>}
      </div>
    )
  }
};

export default MeuComponenteClassudo;
