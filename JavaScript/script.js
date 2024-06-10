
var usersHistory=[]


function procurar() {

    var user = document.getElementById("nameUser").value

    var url = `https://api.github.com/users/${user}`

    //coletando dados



    $.getJSON(url, (user) => {
        showUserData(user)

        if(isNew(user)){
            saveHistory(user)
            showNewUserHistory(user)
        
        }
        

        clearError()
    }).fail(() => {
        showUserData({})
        showError("Nâo Encontrado!!")
    })
}

function saveHistory(user){
    usersHistory.push(user);
}

function isNew(user){
    return usersHistory.filter ((u) => u.login === user.login).length == 0;
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
 function showNewUserHistory(user){
    document.getElementById("history").innerHTML += `<div class="col">
        <img src=${user.avatar_url} class="shadow rounded mt-1 mb-5" width="100"
          id="avatar_url">`
 }
