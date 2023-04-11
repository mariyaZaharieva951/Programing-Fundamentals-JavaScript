import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllOffers() {
    return api.get('/data/offers?sortBy=_createdOn%20desc')
}

// export async function getLatestGames() {
//     return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category')
// }

// export async function getMyPet(userId) {
//     return api.get(`/data/pets/${userId}`)
// }

export async function getOfferById(id) {
    return api.get(`/data/offers/${id}`)
}

export async function createOffer(data) {
    return api.post('/data/offers', data)
}

export async function editOffer(id,data) {
    return api.put(`/data/offers/${id}`, data)
}

export async function deleteOffer(id) {
    return api.del(`/data/offers/${id}`)
}

export async function makeApplication(offerId) {
    return api.post(`/data/applications`,{offerId})
}

export async function getApplications(offerId) {
    return api.get(`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`)
}

export async function getUserApplications(offerId,userId) {
    return api.get(`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}