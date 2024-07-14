module.exports = {
  standardRespose: (data, error) => {
    if (error) {
      return {
        status: 500,
        error: error.message,
      };
    }
   
    return {
      status: 200,
      data: JSON.parse(JSON.stringify(data)),
    };
  },
  middleware:{
    authCheck:(req, res, next)=>{
        console.log('hello i reached at the middleware');
        const user = {
            "id": 1,
            "name":"Christine Obedi",
            "age":20,
        };
        req['user'] = user;
        req['business'] = {user, business:{}};
        next();
    }
  }
};
