const filters = {
    formatTime: function(val){
        var value = new Date(val);
        var year = value.getFullYear();
        var month = padDate(value.getMonth()+1);
        var day = padDate(value.getDate());
        var hour = padDate(value.getHours());
        var minutes = padDate(value.getMinutes());
        var seconds = padDate(value.getSeconds());
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
    }
}
function padDate(va){
    va = va < 10 ? '0' + va : va;
    return va;
}
function processString(value){
    let l = value.length;
    let strLen = 100;
    if(l <= strLen) return value;
    return value.slice(0, strLen - 3) + "...";
}
// 时间格式化
export default filters;
// 文字溢出过滤
export const processStr = value => processString(value); 