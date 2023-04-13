import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllShoes() {
    return api.get('/data/shoes?sortBy=_createdOn%20desc')
}

// export async function getLatestGames() {
//     return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category')
// }

// export async function getMyPet(userId) {
//     return api.get(`/data/pets/${userId}`)
// }

export async function getShoeById(id) {
    return api.get(`/data/shoes/${id}`)
}

export async function createCard(data) {
    return api.post('/data/shoes', data)
}

export async function editCard(id,data) {
    return api.put(`/data/shoes/${id}`, data)
}

export async function deleteCard(id) {
    return api.del(`/data/shoes/${id}`)
}

export async function search(query) {
    return api.get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
}

// export async function getDonations(postId) {
//     return api.get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`)
// }

// export async function getUserDonations(postId,userId) {
//     return api.get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
// }