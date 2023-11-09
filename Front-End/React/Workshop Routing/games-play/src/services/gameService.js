const baseUrl = 'http://localhost:3030';

export const getOne = (gameId) => {
    return fetch(`${baseUrl}/data/games/${gameId}`)
    .then(res => res.json())
}


export const getAll = () => {
   return fetch(`${baseUrl}/data/games`)
    .then(res => res.json())
    
}

export const create = (gameData) => {
    const authData = localStorage.getItem('auth');
        let auth = '';
        if(authData) {
            auth = JSON.parse(authData)
        }
        
        let headers = {};
        if(auth.accessToken) {
            headers['X-Authorization'] = auth.accessToken;
        }


     return fetch(`${baseUrl}/data/games`, {
        method: 'POST',
        headers: {
            ...headers,
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    })
    .then(res => res.json())
    
    // .then(result => 
    //     {   console.log(result);
    //         return result;
    //     }
    // )
    
}

export const edit = (gameId,gameData) => {
    const authData = localStorage.getItem('auth');
    let auth = '';
    if(authData) {
        auth = JSON.parse(authData)
    }
    
    let headers = {};
    if(auth.accessToken) {
        headers['X-Authorization'] = auth.accessToken;
    }
    //  let headers = isAuth();

     return fetch(`${baseUrl}/data/games/${gameId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    })
    .then(res => res.json())
    
    
    
}


// const isAuth = () => {
//     const authData = localStorage.getItem('auth');
//         let auth = '';
//         if(authData) {
//             auth = JSON.parse(authData)
//         }
        
//         let headers = {};
//         if(auth.accessToken) {
//             return headers['X-Authorization'] = auth.accessToken;
//         }
// }
