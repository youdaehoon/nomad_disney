export const fetchCharacters=()=>{

    return fetch("https://disney_api.nomadcoders.workers.dev/characters").then(res=>res.json())
}

export const fechCharacter=(id:string)=>{

    return fetch(`https://disney_api.nomadcoders.workers.dev/characters/${id}`).then(res=>res.json())
}