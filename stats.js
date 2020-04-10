const os = require('os')//importando modulo do node
const log = require('./logger')

setInterval(()=>{

    console.log(os.platform())//mostrar no terminal

    const {freemem, totalmem} = os //Estratégia de desconstruir o objeto
    
    console.log(`${parseInt(freemem() /1024 /1024)} MB` ,parseInt(totalmem() /1024 /1024))
    
    const total = parseInt(totalmem() /1024 /1024)
    const mem = parseInt(freemem() /1024 /1024)
    const percents = parseInt((mem/total)*100)
    
    console.log(mem, total, percents)
    
    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    
    }
    
    console.clear()
    console.log("=== PC STATS ===")
    console.table(stats)

    log('Rodando...');
},5000)