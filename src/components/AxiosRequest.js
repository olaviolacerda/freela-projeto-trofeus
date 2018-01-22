

var config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    }
};

export const get = (id) => {
    axios.get(`https://obscure-retreat-21408.herokuapp.com/api/v1/emails/${id}`, config)
    .then(response => { 
        console.log({status: response.status, data: response.data.data})
    })
    .catch(error => {
        console.log(error.response)
    });
}

export const post = (body) => {
    axios.post('https://obscure-retreat-21408.herokuapp.com/api/v1/emails', body)
    .then(response => { 
        console.log({status: response.status, data: response.data.data, message: response.data.message})
    })
    .catch(error => {
        console.log(error.response)
    });
}
