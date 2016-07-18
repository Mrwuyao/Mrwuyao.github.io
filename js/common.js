/**
 * Created by Administrator on 2016/6/3.
 */
function domReady(fn){
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',function(){
            fn&&fn();
        },false)
    }else{
        document.attachEvent('onreadystatechange',function(){
            if(document.readyState == 'complete'){
                fn&&fn();
            }
        })
    }
}