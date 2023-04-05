export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData')); // връща обект
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}
