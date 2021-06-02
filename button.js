document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("toggle_button").addEventListener("click", toggle_function);
    document.getElementById("common_mistakes").style.display ='none'
}, false);


function toggle_function() {
    var list = document.getElementById("common_mistakes") ;
    var btn = document.getElementById("toggle_button")
    if (list.style.display === "none") {
        list.style.display = "block";
        btn.innerHTML = "סגור";
    } else {
        list.style.display = "none";
        btn.innerHTML = "פתח";
    }
}