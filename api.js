export function getTarefasApi() {
    return fetch("https://spring-server.azurewebsites.net/todo/getTarefas");
}


export function getTarefasApiPaged(idPagina) {
    return fetch("https://spring-server.azurewebsites.net/todo/getTarefasPaged?idPagina=" + idPagina + "&paginaSize=5");
}


export function createTarefaApi(tarefa) {
    return fetch("https://spring-server.azurewebsites.net/todo/createTarefa", {
        body: JSON.stringify(tarefa),
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json"
        },
        method: "POST"
    });
}

export function deleteTarefasApi(id) {
    return fetch("https://spring-server.azurewebsites.net/todo/deleteTarefa?idTarefa=" + id, {
        headers: {
            Accept: "*/*"
        },
        method: "DELETE"
    })
}

export function editTarefaApi(tarefaAEditar) {
    return fetch("https://spring-server.azurewebsites.net/todo/updateTarefa?tarefaId=" + tarefaAEditar.id, {
        body: JSON.stringify(tarefaAEditar),
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json"
        },
        method: "PUT"
    })
}


export function register(user) {
    return fetch("https://spring-server.azurewebsites.net/user/createUtilizador", {
        body: JSON.stringify(user),
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json"
        },
        method: "POST"
    });
}

export function validateUser(email, token) {
    return fetch(`https://spring-server.azurewebsites.net/user/validateUser?email=${email}&token=${token}`, {
        headers: {
            Accept: "/"
        }
    })
}

export function loginUser(email, password) {
    return fetch(`https://spring-server.azurewebsites.net/user/loginUser?email=${email}&password=${password}`, {
        headers: {
            Accept: "/"
        },
        method: "POST"
    })
}
