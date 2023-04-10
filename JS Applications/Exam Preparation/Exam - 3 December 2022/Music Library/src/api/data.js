import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllAlbums() {
    return api.get('/data/albums?sortBy=_createdOn%20desc')
}

// // export async function getLatestGames() {
// //     return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category')
// // }

// // export async function getMyPet(userId) {
// //     return api.get(`/data/pets/${userId}`)
// // }

export async function getAlbumById(id) {
    return api.get(`/data/albums/${id}`)
}

export async function makeLikes(albumId) {
    return api.post(`/data/likes`,{albumId})
}
export async function getLikes(albumId) {
    return api.get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`)
}

export async function getUserLikes(albumId,userId) {
    return api.get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}


export async function createAlbum(data) {
    return api.post('/data/albums', data)
}

export async function editAlbum(id,data) {
    return api.put(`/data/albums/${id}`, data)
}

export async function deleteAlbum(id) {
    return api.del(`/data/albums/${id}`)
}