const fastify = require('fastify')({
    logger: true
})

    fastify.get('/', function(request, reply){
        reply.send({hello: 'world'})
    })

    fastify.listen(3000, '0.0.0.0', function(err, address){
        if(err){
            fastiry.log.error(err)
            process.exit(1)
        }
        fastify.log.info('server listening on ${address}')
    })