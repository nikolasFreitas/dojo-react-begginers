export const SwitchHero = (defaultObject, parametroTrue) => {
    console.log({defaultObject});
    
    const handler =  {};
    Object.keys(defaultObject).forEach( parametro => handler[parametro] = parametro === parametroTrue);
    console.log({handler});
    
    return handler;
}

export const GetHeroName = (defaultObject) => {
    const getNameArray = Object.keys(defaultObject).filter(nome => defaultObject[nome]);

    return getNameArray.length && getNameArray[0];
}

export const GetHeroAttribute = (heroName) => {
    const attribute = {
        giovane: 'o grande',
        bruno: 'o negociante',
        lucas: 'o místico',
        evandro: 'o sábio',
    };

    return attribute[heroName] || '';
}