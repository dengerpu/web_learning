let obj={a:null,b:'哈哈哈', c:{d:undefined,e:'',f:{g:1,h:2}}}

// 对象移除为空的属性
function removeEmpty(obj){
    for(const [key, value] of Object.entries(obj)){ 
        if(value === null || value === undefined || value === ''){
            delete obj[key];
        } else if (typeof value === 'object'){
            removeEmpty(value);
        }
    }
}
removeEmpty(obj);
console.log(obj);