class Pessoa {
    #nome
    #email
    #matricula
  
      setMatricula(matricula) {
        if(matricula >= 6) {
          this.#matricula = matricula;
          return true;
        }
        return false;
      }
  
      getMatricula() {
        return this.#matricula;
      }
  
      setNome(nome) {
        if (typeof nome === 'string' && nome.trim() !== '') {
            this.#nome = nome;
            return true;
        }
        return false;
    }
  
      getNome() {
        return this.#nome = nome;
      }
  
      setEmail(email) {
        if (typeof email === 'string' && email.includes('@')) {
            this.#email = email;
            return true;
        }
        return false;
    }
  
      getEmail() {
        return this.#email = email;
      }

    }
  
module.exports = Pessoa;