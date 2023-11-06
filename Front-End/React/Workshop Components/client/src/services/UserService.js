const baseUrl = 'http://localhost:3030/jsonstore/users';


export const getAll = async() => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const data = Object.values(result);
  console.log(data)
    return data;


}

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`)
    const result = await response.json()
    console.log('result',result)
    return result;
}

export const create = async(userData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    
    const result = await response.json();


    return result;
}


export const remove = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    });

    const result = await response.json();
    
    return result;
}

export const edit = async (userId,newUserData) => {
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUserData)
        
    });
    const result = await response.json();
    
    return result;
}
