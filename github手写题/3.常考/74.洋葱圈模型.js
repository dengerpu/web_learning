function compose(...middlewares){
    return function(ctx) {
        function dispatch(i){
            let fn = middlewares[i];
            if(!fn) return Promise.resolve();
            try {
                return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
            } catch(err) {
                return Promise.reject(err);
            }   
        }
        return dispatch(0);
    }
}
async function middleware1(ctx, next) {
    console.log("Middleware 1 before");
    await next();
    console.log("Middleware 1 after");
  }
  
  async function middleware2(ctx, next) {
    console.log("Middleware 2 before");
    await next();
    console.log("Middleware 2 after");
  }
  
  async function middleware3(ctx, next) {
    console.log("Middleware 3 before");
    await next();
    console.log("Middleware 3 after");
  }
  
  const fn = compose(middleware1, middleware2, middleware3);

  
  
  fn({}).catch((err) => console.error(err));