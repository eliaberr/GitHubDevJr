function procurar(){
    
    var user = document.getElementById("nameUser").value

    var url = `https://api.github.com/users/${user}`

    $.getJSON(url, (user) => {
        document.getElementById("name").innerHTML = user.name;
        document.getElementById("html_url").innerHTML = user.html_url;
        document.getElementById("company").innerHTML = 
        `<img src="${user.avatar_url}" class="shadow rounded mt-1" width="200">`
    })
}