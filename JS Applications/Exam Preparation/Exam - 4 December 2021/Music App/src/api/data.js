import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllCards() {
    return api.get('/data/albums?sortBy=_createdOn%20desc&distinct=name')
}

export async function getMyCard(userId) {
    return api.get(`/data/albums/${userId}`)
}

export async function search(query) {
    return api.get(`/data/albums?where=name%20LIKE%20%22${query}%22`)
}

export async function createCard(data) {
    return api.post('/data/albums', data)
}

export async function editCard(userId,data) {
    return api.put(`/data/albums/${userId}`, data)
}

export async function deleteCard(id) {
    return api.del(`/data/albums/${id}`)
}

