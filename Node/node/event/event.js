const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', () => {
    console.log('Hello Amrit');
}) //on is used for listen to event

emitter.emit('greet');  //emit is used to trigger that event