const listaClientes = () =>  {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })
}

const removeCliente = (id) => {
    return fetch (`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}


const criaClientes = (name, email) => {

    return fetch (`http://localhost:3000/profile`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json' // APPLICATION É COM DOIS P's
      },
      body: JSON.stringify({
        nome: name,
        email: email
      })
    })
    .then( response => {
      return response.body;
    })
  }

export const clienteService = { 
    listaClientes, 
    criaClientes,
    removeCliente
}


