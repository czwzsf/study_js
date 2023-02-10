function init() {
    let num = document.getElementById("num");
    num.value = 0;
    num.disabled = "disabled";
    let oButton = document.getElementsByTagName("input");
    let btn_num1;
    let fh;
    for (let i = 0; i < oButton.length; i++) {
        oButton[i].onclick = function () {
            if (isNumber(this.value)) {
                //num.value=(num.value+this.value)*1;
                if (isNull(num.value)) {
                    num.value = this.value;
                } else {
                    num.value = num.value + this.value;
                }
            } else {
                //alert("fei");
                let btn_num = this.value;

                switch (btn_num) {
                    case "+":
                        btn_num1 = Number(num.value);
                        num.value = 0;
                        fh = "+";
                        break;
                    case "-":
                        btn_num1 = Number(num.value);
                        num.value = 0;
                        fh = "-";
                        break;
                    case "*":
                        btn_num1 = Number(num.value);
                        num.value = 0;
                        fh = "*";
                        break;
                    case "/":
                        btn_num1 = Number(num.value);
                        num.value = 0;
                        fh = "/";
                        break;
                    case ".":
                        num.value = dec_number(num.value);
                        break;
                    case "<-":
                        num.value = back(num.value);
                        break;
                    case "c":
                        num.value = "0";
                        break;
                    case "+/-":
                        num.value = sign(num.value);
                        break;
                    case "=":
                        switch (fh) {
                            case "+":
                                num.value = btn_num1 + Number(num.value);
                                //console.log(btn_num1);
                                break;
                            case "-":
                                num.value = btn_num1 - Number(num.value);
                                //console.log(btn_num1);
                                break;
                            case "*":
                                num.value = btn_num1 * Number(num.value);
                                //console.log(btn_num1);
                                break;
                            case "/":
                                if (Number(num.value) === 0) {
                                    alert("除数不能是0");
                                    num.value = 0;
                                } else {
                                    num.value = btn_num1 / Number(num.value);
                                }

                                //console.log(btn_num1);
                                break;
                        }
                        break;
                }
            }
        }
    }
}

/*正负号*/
function sign(n) {
    // if(n.indexOf("-")==-1){
    // 	  n="-"+n;
    // }else{
    // 	  n=n.substr(1,n.length);
    // }
    n = Number(n) * -1;
    return n;
}

/*退位键*/
function back(n) {
    n = n.substr(0, n.length - 1);
    if (isNull(n)) {
        n = "0";
    }
    return n;
}

/*小数点*/
function dec_number(n) {
    if (n.indexOf(".") === -1) {
        n = n + ".";
    }
    return n;
}

/*验证文本框是否为空或者0*/
function isNull(n) {
    return n === "0" || n.length === 0;
}

function isNumber(n) {
    // if(!isNaN(n)){
    //   	return true;//参数n是数字
    // }else{
    // 	   return false;//参数n不是数字
    // }
    return !isNaN(n);
}

// isNaN：不能转换为数字：true，可以转换成数字是false
