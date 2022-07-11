const amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', (connError, connection) => {
    if(connError){
        throw connError;
    }
    connection.createChannel((channelError, channel) => {
        if(channelError){
            throw channelError;
        }
        const QUEUE = 'codingtest'
        channel.assertQueue(QUEUE);
        channel.sendToQueue(QUEUE, Buffer.from('Hello from its coding time'));
        console.log(`Message send ${QUEUE}`);
    })
})