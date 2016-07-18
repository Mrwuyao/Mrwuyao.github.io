/**
 * Created by Administrator on 2016/6/7.
 */
function getStyle(obj,name){
    return (obj.currentStyle ||getComputedStyle(obj,false))[name]
}
function move(obj,json,options){
//            var start = parseFloat(getStyle(obj,name));
//            var dis = iTarget-start;
//    设置一个默认值（options）
    var options = options || {};
    options.duration = options.duration || 500;
    options.easing = options.easing || 'ease-in';
    var start = {};
    var dis = {};
    for(var name in json){
        start[name]= parseFloat(getStyle(obj,name));//getStyle获取出来的是200px是字符串需要转换
        if(isNaN(start[name])) {
            switch (name) {
                case 'left':
                    start[name] = obj.offsetLeft;
                    break;
                case 'top':
                    start[name] = obj.offsetTop;
                    break;
                case 'opacity':
                    start[name] = 1;
                    break;
                case 'borderWidth':
                    start[name] = 0;
                    break;
                // width
            }
        }
        dis[name]=json[name]-start[name];  //可以理解为距离差值；也就是总共需要走的数
    }
    var count = Math.floor(options.duration/30);//总步数=总时间/每多少毫秒一步（速度）
    var n = 0;  //找个人来计算-实际的数

    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        n++;

//                obj.style[name] = start+dis/count*n+'px';
        for(var name in json){
            //var a = n/count;//a可以理解为比例---a=实际走的数/总数
            //var cur = start[name]+dis[name]*a;//从起始位置开始-已经走了多少数；
            switch(options.easing){
                case 'linear':
                    var a = n/count;
                    var cur = start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a = n/count;
                    var cur = start[name]+dis[name]*a*a*a;
                    break;
                case 'ease-out':
                    var a = 1-n/count;
                    var cur = start[name]+dis[name]*(1-a*a*a);
                    break;
            }
            if(name == 'opacity'){
                obj.style.opacity = cur;
                obj.style.filter = 'alpha(opacity='+cur*100+')';
            }else{
                obj.style[name] = cur+'px' ;
            }
        }
        if(n == count){
            clearInterval(obj.timer);
            options.complete&&options.complete();
        }
    },30)
}