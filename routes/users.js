async function routes(fastify, options) {

    //decorator
    fastify.decorate('util', (request, key, value) => { 
        console.log(' Decorator: ', key , value);
     })

     //routes

     //get
    fastify.route({
        method: 'GET',
        url: '/:id',
        schema: {
            response: {
                '200': {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string'
                        },
                        firstName: {
                            type: 'string'
                        }, 
                        lastName: {
                            type: 'string'
                        },
                    }
                }
            }
        },
        onRequest: function (request, reply, done) {
          // This hook will always be executed after the shared `onRequest` hooks
          console.log(' hook: onRequest ');
          fastify.util(request, 'timestamp', new Date())
          done()
        },
        onResponse: function (request, reply, done) {
          // this hook will always be executed after the shared `onResponse` hooks
          done()
        },
        preParsing: function (request, reply, done) {
          // This hook will always be executed after the shared `preParsing` hooks
          done()
        },
        preValidation: function (request, reply, done) {
          // This hook will always be executed after the shared `preValidation` hooks
          done()
        },
        preHandler: function (request, reply, done) {
          // This hook will always be executed after the shared `preHandler` hooks
          done()
        },
        // // Example with an array. All hooks support this syntax.
        //
        // preHandler: [function (request, reply, done) {
        //   // This hook will always be executed after the shared `preHandler` hooks
        //   done()
        // }],
        preSerialization: (request, reply, payload, done) => {
          // This hook will always be executed after the shared `preSerialization` hooks
          done(null, payload)
        },
        handler: async function (request, reply) {
          reply.send({
            id: request.params.id,
            firstName: "John",
            lastName: "Smith"
        })
        }
      })

      //post
    fastify.post('/', function (req, reply) {
        reply.send({ Response: 'succcess' })
    })
}

module.exports = routes;