function ymd() {
    //获取id=xxxx的控件
    let yyyy = document.getElementById("yyyy");
    let mm = document.getElementById("mm");
    let dd = document.getElementById("dd");
    let current_date = new Date();
    let current_year = current_date.getFullYear();
    initSelect(yyyy, 1999, current_year);
    initSelect(mm, 1, 12);
    initSelect(dd, 1, 31);
    let yearLength = yyyy.length;
    // 列表框选中某一个条目
    yyyy.selectedIndex = Math.round(yearLength / 2);
}

/*给列表框赋值，传递三个参数：表单元素，开始值，结束值*/
function initSelect(obj, start, end) {
    for (let i = start; i <= end; i++) {
        obj.options.add(new Option(i.toString(), i.toString()));
    }
}

function turnSelect() {
    // 获取年和月
    let yyyy = document.getElementById("yyyy");
    let mm = document.getElementById("mm");
    let dd = document.getElementById("dd");
    // 转化月份信息为int类型
    let mm_data = parseInt(mm.value);
    let yyyy_data = parseInt(yyyy.value);
    let day;
    if (mm_data === 4 || mm_data === 6 || mm_data === 9 || mm_data === 11) {
        day = 30;
    } else if (mm_data === 2) {
        if (isLeap(yyyy_data)) {
            day = 29;
        } else {
            day = 28;
        }
    } else {
        day = 31;
    }
    dd.options.length = 0;
    initSelect(dd, 1, day);
}

//判断是否为闰年
function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function initLogo() {
    let logo = document.getElementById("logo");
    for (let i = 1; i < 15; i++) {
        logo.options.add(new Option(i.toString(), i.toString()));
    }
}

function selectLogo() {
    let logo = document.getElementById("logo");
    let n = logo.value;
    let logoImg = document.getElementById("logo_img");
    logoImg.src = "/static/image/headLogo/" + n + ".gif";
}
