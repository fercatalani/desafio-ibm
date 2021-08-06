import axios from 'axios';

const api = axios.create({
    baseURL: "http://169.57.99.187:30001",
    headers: { 'content-type': 'application/json' },
})

export default api;


// AUTHOR API
// Retorna lista de autor
export const GetAuthor = () => {
    const resp = api.get('/author').then((response) => {
        return response.data
    }).catch((err) => {
        console.log(err.response)
    })

    return resp
}

// Retorna autor baseado no id.
export const GetAuhorByID = (id) => {
    const resp = api.get(`/author/${id}`).then((response) => {
        return response.data
    }).catch((err) => {
        console.log(err.response)
    })

    return resp
}

// Retorna autor baseado no nome
export const GetAuhorByName = (nome) => {
    const resp = api.get(`/findByNameContaining?name=${nome}`).then((response) => {
        return response.data
    }).catch((err) => {
        console.log(err.response)
    })

    return resp
}

// Retorna autor baseado no nome ou bibliografia
export const GetAuhorByNameAndBiography = (name, biography) => {
    const resp = api.get(`/findByNameOrBiographyContaining?=biography${biography}&name=${name}`).then((response) => {
        return response.data
    }).catch((err) => {
        console.log(err.response)
    })

    return resp
}

// Insert de autor by Id
export const InsertAuthor = async (data) => {
    const resp = await api.post('/author', JSON.stringify(data)).then((response) => {
        console.log('Retorno Insert Livro ==> ', response)
        return response
    });

    return resp
}

// Delete de autor by Id
export const DeleteAuthor = async (id) => {
    const resp = await api.delete(`/author/${id}`).then((response) => {
        console.log('Delete Livro ==> ', response)
        return response
    })

    return resp
}

// Update de autor
export const UpdateAuthor = async (data) => {
    const resp = await api.put('/author', data).then((response) => {
        console.log('Update Livro ==> ', response)
        return response
    })

    return resp
}