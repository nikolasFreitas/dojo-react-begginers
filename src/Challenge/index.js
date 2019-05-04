import React, { useState } from 'react';
import { SwitchHero, GetHeroName, GetHeroAttribute } from '../helpers/objectHelper';
import * as heroeImg from './Icons';
import * as Styled from './style';

const SeletorDePersonagem = () => {
    const [participanteEscolhido, AlteraParticipanteEscolhido] = useState({
        giovane: false,
        bruno: false,
        lucas: false,
        evandro: false,
    });

    const name = GetHeroName(participanteEscolhido) || 'Heros';
    const theClasse = GetHeroAttribute(name);
    
    return (
        <Styled.Container>
            <Styled.Title>{`${name} ${theClasse}`}!</Styled.Title>
            <Styled.HeroContainer>
                <Styled.CardLike>
                    <Styled.HeroBox>
                        <Styled.HeroName>
                            Giovane
                        </Styled.HeroName>
                        <Styled.HeroImage
                            onClick={() => AlteraParticipanteEscolhido(SwitchHero(participanteEscolhido, 'giovane'))}
                            isSelected={participanteEscolhido.giovane}
                        >
                            <img src={heroeImg.boy} />
                        </Styled.HeroImage>
                    </Styled.HeroBox>
                </Styled.CardLike>

                <Styled.CardLike>
                    <Styled.HeroBox>
                        <Styled.HeroName>
                            Bruno
                        </Styled.HeroName>
                        <Styled.HeroImage
                            onClick={() => AlteraParticipanteEscolhido(SwitchHero(participanteEscolhido, 'bruno'))}
                            isSelected={participanteEscolhido.bruno}
                        >
                            <img src={heroeImg.boy2} />
                        </Styled.HeroImage>
                    </Styled.HeroBox>
                </Styled.CardLike>

                <Styled.CardLike>
                    <Styled.HeroBox>
                        <Styled.HeroName>
                            Lucas
                        </Styled.HeroName>
                        <Styled.HeroImage
                            onClick={() => AlteraParticipanteEscolhido(SwitchHero(participanteEscolhido, 'lucas'))}
                            isSelected={participanteEscolhido.lucas}
                        >
                            <img src={heroeImg.man2} />
                        </Styled.HeroImage>
                    </Styled.HeroBox>
                </Styled.CardLike>

                <Styled.CardLike>
                    <Styled.HeroBox>
                        <Styled.HeroName>
                            Evandro
                        </Styled.HeroName>
                        <Styled.HeroImage 
                            onClick={() => AlteraParticipanteEscolhido(SwitchHero(participanteEscolhido, 'evandro'))} 
                            isSelected={participanteEscolhido.evandro}
                        >
                            <img src={heroeImg.man} />
                        </Styled.HeroImage>
                    </Styled.HeroBox>
                </Styled.CardLike>
            </Styled.HeroContainer>
        </Styled.Container>
    )
}

export default SeletorDePersonagem;
