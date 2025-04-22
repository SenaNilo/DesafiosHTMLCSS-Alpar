class ListaUsers {
    _users = []

    constructor(users){
        users.forEach(user => {
            this.users = user
        })
    }
    set users(user){
        this._users.push(user)
    }

    addUser(user){
        this._users.push(user)
    }
    showUsers(){
        console.log(this._users)
    }
    login(email,senha){
        for(const user of this._users) {
            if(user.getEmail() == email && user.getSenha() == senha){
                // console.log("dentro if")
                return true
            }
        }
        return false
    }
    getUser(email, senha){
        for(const user of this._users) {
            if(user.getEmail() == email && user.getSenha() == senha){
                // console.log("dentro if")
                return user
            }
        }
    }
}