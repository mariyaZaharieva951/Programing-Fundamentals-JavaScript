import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllMemes() {
    return api.get('/data/memes?sortBy=_createdOn%20desc')
}

// export async function getLatestGames() {
//     return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category')
// }

export async function getMyMemes(userId) {
    return api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getMemeById(id) {
    return api.get(`/data/memes/${id}`)
}

export async function createMeme(data) {
    return api.post('/data/memes', data)
}

export async function editMeme(id,data) {
    return api.put(`/data/memes/${id}`, data)
}

export async function deleteMeme(id) {
    return api.del(`/data/memes/${id}`)
}