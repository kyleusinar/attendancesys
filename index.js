document.querySelector("#form").addEventListener("submit", submitFun);
function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "kyle" && password == "stus") {
        alert("LOGIN SUCCESSFUL!");
        window.location.href = "ATTENDANCE.html";
    } else {
        alert("INVALID USERNAME OR PASSWORD");
        document.querySelector("#form").reset();
    }
}