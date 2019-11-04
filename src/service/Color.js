const URL = window.location.protocol + '//localhost:8081/color/';
// const URL = 'https://localhost:8081/color/';

const setAuth = (token) => ({ 'Authorization': 'Bearer ' + token });

const generateOptions = (method, token) => {
    const headers = setAuth(token);
    return {
        cache: 'no-cache',
        method,
        headers,
        mode: 'cors',
    };
}

export const getColor = (token) => {
    return fetch(URL + 'query', generateOptions('GET', token)).then(res => res.text());
}

export const setColor = (token) => {
    return fetch(URL + 'cycle', generateOptions('POST', token)).then(res => res.text());
}