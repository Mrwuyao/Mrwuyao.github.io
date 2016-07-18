/**
 * Created by Administrator on 2016/6/21.
 */
//��ȡclass
function getByClass(oParent, sClass){
    if(oParent.getElementsByClassName){
        return oParent.getElementsByClassName(sClass);
    }else{
        var aEle=oParent.getElementsByTagName('*');
        var arr=[];
        var reg=new RegExp('\\b'+sClass+'\\b');
        for(var i=0; i<aEle.length; i++){
            if(reg.test(aEle[i].className)){
                arr.push(aEle[i]);
            }
        }
        return arr;
    }
}
// ���һ��������û�����class
function hasClass(obj, sClass){
    var reg=new RegExp('\\b'+sClass+'\\b');
    return reg.test(obj.className);
}
// ���class
function addClass(obj, sClass){
    if(obj.className){
        if(!hasClass(obj, sClass)){
            obj.className+=' '+sClass;
        }
    }else{
        obj.className=sClass;
    }
}
// ɾ��
function removeClass(obj, sClass){
    var reg=new RegExp('\\b'+sClass+'\\b', 'g');
    if(hasClass(obj, sClass)){
        obj.className=obj.className.replace(reg, '').replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
    }
}
