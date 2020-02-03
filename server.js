'use strict'
//Imports
const fastify = require('fastify')();

//middlewares
fastify.use(require('cors')())
fastify.use(require('hide-powered-by')())
fastify.use(require('x-xss-protection')())

//Routes
fastify.register(require('./routes/users'), {prefix: '/users'});

//Listeners
fastify.listen(3000, function(err, address){
    if(err){
        console.log(err);
        process.exit(1);
    }
    else{
        console.log('Server is up and running on port 3000...');
    }
});