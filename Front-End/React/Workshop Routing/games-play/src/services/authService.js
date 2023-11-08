const baseUrl = 'http://localhost:3030/users';


 export const login = async (email,password) => {

    try{    
        const response = await fetch(`${baseUrl}/login`, {
        method:'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({email,password})
        })
        console.log(response)
        if(response.ok) {

            const result = await response.json();
            console.log(result)
            
            return result;
        }
    } catch(error) {
        console.log(error)
    }
}

export const logout = async (accessToken) => {
    try{
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
    }
    });
    console.log(response)
    return response; 
} catch(error) {
    console.log(error);
}
} 