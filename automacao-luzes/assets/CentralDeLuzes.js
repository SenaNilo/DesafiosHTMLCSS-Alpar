class CentralDeLuzes {
    static instance
    constructor(name){
        if(CentralDeLuzes.instance)
            return CentralDeLuzes.instance

        CentralDeLuzes.instance = this
        this.name = name
    }

    static ligar(comodo){
        return "Luz do "+ comodo +" ligada"
    }
    static desligar(comodo){
        return "Luz do "+ comodo +" desligada"
    }

    static getInstance(){
        if(!CentralDeLuzes.instance)
            new Singleton();
        
        return this.instance
    }
}

const central =  new CentralDeLuzes("Central Oficial")
const central2 =  new CentralDeLuzes("Outra Central")

console.log(CentralDeLuzes.getInstance())
console.log(CentralDeLuzes.getInstance())