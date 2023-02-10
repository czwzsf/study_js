//判断是否为闰年
function isLeap(year) {
    if((year%4==0 && year%100!=0)||(year%400==0)){
        return 1;
    }
    return 0;
}
console.log(isLeap(2016))
