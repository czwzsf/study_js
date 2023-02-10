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

