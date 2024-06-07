function procurar(){
    
    var user = document.getElementById("nameUser").value

    var url = `https://api.github.com/users/${user}`
    
    //coletando dados
    nameUser = document.getElementById("name")
    htmlUser = document.getElementById("html_url")
    companyUser = document.getElementById("company")
    mensegerErro = document.getElementById("erro")

    $.getJSON(url, (user) => {
        mensegerErro.innerHTML = ""

        nameUser.innerHTML = user.name;
        htmlUser.innerHTML = user.html_url;
        companyUser.innerHTML = 
        `<img src="${user.avatar_url}" class="shadow rounded mt-1" width="200">`
    }).fail(() => {
        nameUser.innerHTML = ""
        htmlUser.innerHTML = ""
        companyUser.innerHTML = ""

        mensegerErro.innerHTML = `<div class="alert alert-danger" role="alert">
        Usúario Não Encontrado!
        </div>`
    })
}