const EventEmittter = require('events')

const emitter = new EventEmittter()

emitter.on('log',(message)=>{

    console.log(message)

})

function log(message)
{
    emitter.emit('log',message)
}

module.exports = log