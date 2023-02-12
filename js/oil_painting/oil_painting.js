let flag = true;

function showMenu() {
    let menu2 = document.getElementById("menu2");
    if (flag) {
        menu2.style.display = "block";
        flag = !flag;
    } else {
        menu2.style.display = "none";
        flag = !flag;
    }
}

function showMenu1() {
    let menu2 = document.getElementById("menu2");
    menu2.style.display = "none";
    flag = true;
}
