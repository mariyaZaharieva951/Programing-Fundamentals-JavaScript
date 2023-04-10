import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllPets() {
    return api.get('/data/pets?sortBy=_createdOn%20desc&distinct=name')
}

// export async function getLatestGames() {
//     return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category')
// }

// export async function getMyPet(userId) {
//     return api.get(`/data/pets/${userId}`)
// }

export async function getPetById(id) {
    return api.get(`/data/pets/${id}`)
}

export async function createPet(data) {
    return api.post('/data/pets', data)
}

export async function editPet(id,data) {
    return api.put(`/data/pets/${id}`, data)
}

export async function deletePet(id) {
    return api.del(`/data/pets/${id}`)
}

export async function makeDonate(petId) {
    return api.post(`/data/donation`,{petId})
}

export async function getDonations(petId) {
    return api.get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`)
}

export async function getUserDonations(petId,userId) {
    return api.get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}