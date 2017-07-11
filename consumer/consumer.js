var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client(),
    consumer = new Consumer(
        client,
        [
            { topic: 't1', partition: 0 },
        ],
        {
            autoCommit: false
        }
    );
console.log('client'+JSON.stringify(consumer.payloads[0].topic));
let messageNew ;
// let t1=JSON.stringify(consumer.payloads[0].topic);
// let t1 = 't1';
consumer1((err) => {
if(err) { return err; }
return;
});


function consumer1( callback) {
 consumer.on('message', function (message) {
    console.log(message);
    messageNew = message;
});
return callback(null, messageNew);
}
