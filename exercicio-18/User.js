class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log("Sucesso");
    } else {
      console.log("Login ou senha incorretos");
    }
  }
}

const newUser = new User("Eric", "email@.com", "senha");

newUser.login("Eric", "email@.com");
