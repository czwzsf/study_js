// 全局变量尽在页面刷新时初始化
let flag = true;

function checkInterest() {
    let interest = document.getElementsByName("interest1");
    for (let i = 0; i < interest.length; i++) {
        interest[i].checked = flag;
    }
    if (flag) {
        document.getElementById("btn1").value = "全不选";
    } else {
        document.getElementById("btn1").value = "全选";
    }
    flag = !flag;

}

function checkInterest1() {
    let interest1 = document.getElementsByName("interest1");
    for (let i = 0; i < interest1.length; i++) {
        interest1[i].checked = !interest1[i].checked;
    }

}
