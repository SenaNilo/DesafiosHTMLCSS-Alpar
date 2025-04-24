// Singleton - Somente uma instancia, um objeto, para todo o programa
class Data {
    static instance
    constructor(data){
        if(Data.instance)
            return Data.instance

        Data.instance = this
        this.data = data
    }
}

const instancia = new Data("Sou um dó")
const instancia2 = new Data("Sou mais um dó")

console.log(instancia.data)
console.log(instancia2.data)

// Factory Method - Define  uma interface para criar um objeto
class Logger {
    log(text){
        console.log("Logger Genérico: ", text)
    }
}
class FileLogger extends Logger{
    log(text){
        console.log("Logger de Arquivo: ", text)
    }
}
class ConsoleLogger extends Logger {
    log(text){
        console.log("Logger de Console: ", text)
    }
}

function createLogger(type){
    if(type === "console")
        return new ConsoleLogger()
    else if(type === "file")
        return new FileLogger()
    else
        return new Logger()
}

const env = "desenvolvimento"
const logger = createLogger(env === "desenvolvimento" ? "console" : "file")

logger.log("Olá")