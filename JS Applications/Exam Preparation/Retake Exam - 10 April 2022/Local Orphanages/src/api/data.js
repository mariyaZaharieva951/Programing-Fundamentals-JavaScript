import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllPosts() {
    return api.get('/data/posts?sortBy=_createdOn%20desc')
}

export async function getAllMyPosts(userId) {
    return api.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function makeDonate(postId) {
    return api.post(`/data/donations`,{postId})
}

export async function getDonations(postId) {
    return api.get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`)
}

export async function getUserDonations(postId,userId) {
    return api.get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function getPostById(id) {
    return api.get(`/data/posts/${id}`)
}

export async function createPost(data) {
    return api.post('/data/posts', data)
}

export async function editPost(id,data) {
    return api.put(`/data/posts/${id}`, data)
}

export async function deletePost(id) {
    return api.del(`/data/posts/${id}`)
}