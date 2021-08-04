import axios from 'axios';

const api = axios.create({
    baseURL: "http://169.57.99.187:30001",

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
    console.log('Dados recebido pelo formulario ==> ', data)
    const resp = await api.post('/author', data);
    console.log('Retorno InsertLivro ==> ', resp)
}

// Delete de autor by Id
export const DeleteAuthor = async (id) => {
    const resp = await api.delete(`/author/${id}`)
    console.log('DeleteLivro ==> ', resp.response)
}

// Update de autor
export const UpdateAuthor = async (data) => {
    const resp = await api.put('/author', data)
    console.log('UpdateLivro ==> ', resp.response)
}