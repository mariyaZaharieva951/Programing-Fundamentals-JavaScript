import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllProducts() {
    return api.get('/data/products?sortBy=_createdOn%20desc')
}

export async function getAllBoughtForProductById(productId) {
    return api.get(`/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`)
}

export async function getAllBoughtForProductByIdForUser(productId, userId) {
    return api.get(`/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function buyProduct(productId) {
    return api.post(`/data/bought`, {productId})
}

export async function getProductById(id) {
    return api.get(`/data/products/${id}`)
}

export async function createProduct(data) {
    return api.post('/data/products', data)
}

export async function editProduct(id,data) {
    return api.put(`/data/products/${id}`, data)
}

export async function deleteProduct(id) {
    return api.del(`/data/products/${id}`)
}