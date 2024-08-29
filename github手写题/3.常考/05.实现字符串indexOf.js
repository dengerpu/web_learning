String.prototype.myIndexOf = function(searchValue, position = 0) {
    let _searchValue = String(searchValue); //所有传入值都会被强制转换为字符串
    let _position = position < 0 ? 0 : position;
    for(let index = _position; index < this.length; index++) {
        if(this[index] == _searchValue[0]) {
            let len = searchValue.length;
            let i = 0;
            while(i < len && this[index + i] === searchValue[i]) {
                i++;
            }
            if(i === len) return index;
        }
    }
};
str = "test tesy";
console.log(str.myIndexOf("t", 1));