


function displayHome () {
    document.getElementById('disHome').innerText = document.getElementById('home').innerText;
    document.getElementById("home").setAttribute("class", "active"); 
    document.getElementById("account").setAttribute("class", "inactive"); 
    document.getElementById("aboutus").setAttribute("class", "inactive"); 
}
function displayAccount () {
    document.getElementById('disAccount').innerText = document.getElementById('account').innerText;
    document.getElementById("home").setAttribute("class", "inactive"); 
    document.getElementById("account").setAttribute("class", "active"); 
    document.getElementById("aboutus").setAttribute("class", "inactive"); 
}
function displayAboutUs () {
    document.getElementById('disAboutus').innerText = document.getElementById('aboutus').innerText;
    document.getElementById("home").setAttribute("class", "inactive"); 
    document.getElementById("account").setAttribute("class", "inactive"); 
    document.getElementById("aboutus").setAttribute("class", "active"); 
}