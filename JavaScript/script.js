function procurar() {

    var user = document.getElementById("nameUser").value

    var url = `https://api.github.com/users/${user}`

    //coletando dados



    $.getJSON(url, (user) => {
        showUserData(user)
        clearError()
    }).fail(() => {
        showUserData({})
        showError("Nâo Encontrado!!")
    })
}

function showError(msg) {
    document.getElementById("erro").innerHTML = `   <div class="alert alert-danger" role="alert">
                                                            ${msg}
                                                        </div>`
}

function clearError() {
    document.getElementById("erro").innerHTML = ""
}

function showUserData(user) {
    nameUser = document.getElementById("name").innerHTML = user.name || ""
    htmlUser = document.getElementById("html_url").innerHTML = user.html_url || ""
    companyUser = document.getElementById("company").innerHTML = user.company || ""

    document.getElementById("avatar_url").innerHTML = user.avatar_url ?
        `<img src="${user.avatar_url}" class="shadow rounded mt-1" width="200">` : ""
}

