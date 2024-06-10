function procurar(){
    
    var user = document.getElementById("nameUser").value

    var url = `https://api.github.com/users/${user}`

    //coletando dados
    procurarId(nameUser, "name")
    htmlUser = document.getElementById("html_url")
    companyUser = document.getElementById("company")
    mensegerErro = document.getElementById("erro")

    $.getJSON(url, (user) => {
        limpar(mensegerErro)

        nameUser.innerHTML = user.name;
        htmlUser.innerHTML = user.html_url;
        companyUser.innerHTML = 
        `<img src="${user.avatar_url}" class="shadow rounded mt-1" width="200">`
    }).fail(() => {
        limpar(nameUser)
        limpar(htmlUser)
        limpar(companyUser)
        
        mensegerErro.innerHTML = `<div class="alert alert-danger" role="alert">
        Usúario Não Encontrado!
        </div>`
    })
}

function limpar(limpar){
    limpar.innerHTML = ""
}

function procurarId(nomeVar, id){
    nomeVar = document.getElementById($["id"])
}