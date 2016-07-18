/**
 * Created by Administrator on 2016/6/14.
 */
//cookie封装函数
//设置
function addCookie(name,value,iDay){
    if(iDay){
        var oDate = new Date();
        oDate.setDate(oDate.getDate()+iDay);
        document.cookie = name+'='+value+'; path=/; expires='+oDate.toUTCString();
    }else{
        document.cookie = name+'='+value+'; path=/';
    }
}
//获取
function getCookie(name){
    var arr = document.cookie.split('; ');
    for(var i = 0; i<arr.length;i++){
        var arr2=arr[i].split('=');
        if(arr2[0]==name){
            return arr2[1];
        }
    }
    return '';
}
//删除
function removeCookie(name){
    addCookie(name,'123',-1)
}