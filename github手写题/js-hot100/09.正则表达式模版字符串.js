// 正则表达式模版字符串
String.prototype.render = function(data) {
    return this.replace(/{{[\s\S]*?}}/g, match => {
        // 去掉{{}}
        match = match.slice(2, match.length - 2).trim();
        if(match == "") {
            return;
        } else if (match[0] == '#') {
            // 去掉#
            return eval(match.slice(1));
        } else  {
            return data[match] || '';
        }
    })
}
const data = {
    name: "小明",
    age: 16,
    school: "第三中学",
    classroom: "教室2"
}


console.log(
    "{{ name }} 今年 {{ age }} 岁，就读于 {{ school }} 今天在 {{ classroom }} 上课，{{ name }} {{ #data.age >= 18 ? '成年了' : '未成年' }}".render(data)
);
// 小明 今年 16 岁，就读于 第三中学 今天在 教室2 上课，小明 未成年

console.log(
    `{{name}}说了句{{#
    if (data.age >= 18) {
        "我已经成年了！"
    } else {
        "我还没有成年！"
    }
}}`.render(data)
);
    // 小明说了句我还没有成年！