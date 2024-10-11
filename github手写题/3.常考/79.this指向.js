class UserService { 
    syncFetch(fn) {
        fn();
    }
    init(){
        console.log('this:', this);
    }
    ready(){ 
        console.log('ready中的', this);
        // A
        this.syncFetch(()=>{ this.init();}); // UserService {}
        //B
        this.syncFetch(this.init); // undefined 传递过去是一个函数
    }
}
const x = new UserService(); 
x.ready();
console.log('--------');
function test() {
    console.log('test', this);
}

function abc() {
    console.log('this', this);
    test();
}
abc();