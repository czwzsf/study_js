function show1() {
    let xb = document.getElementsByName("xb");
    if (xb[0].checked) {
        console.log(xb[0].value);
    } else {
        console.log(xb[1].value);
    }
}

