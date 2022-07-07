import { Router } from 'express'
import os  from 'os';
import compression from 'compression';

const infoWebRouter = new Router()

infoWebRouter.get('/info', compression(), (req, res) => {
    res.json({
        "Argumentos de entrada": process.argv,
        "Sistema Operativo": process.platform,
        "Version de node" : process.version,
        "Memoria total reservada": process.memoryUsage().rss,
        "Path de ejecucion" : process.execPath,
        "Process id" : process.pid,
        "Carpeta del proyecto": process.cwd(),
        "Numero Procesadores": os.cpus().length
       });
})

infoWebRouter.get('/infoSin', (req, res) => {
    res.json({
        "Argumentos de entrada": process.argv,
        "Sistema Operativo": process.platform,
        "Version de node" : process.version,
        "Memoria total reservada": process.memoryUsage().rss,
        "Path de ejecucion" : process.execPath,
        "Process id" : process.pid,
        "Carpeta del proyecto": process.cwd(),
        "Numero Procesadores": os.cpus().length
       });
})

export default infoWebRouter