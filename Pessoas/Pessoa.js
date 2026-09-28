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
        if(nome != null) {
          this.#nome.trim() = nome;
          return true;
        }
        return false;
      }
  
      getNome(nome) {
        this.#nome = nome;
      }
  
      setEmail(email){
        if(util.validarEmail(email)){
            this.#email = email;
            return true;
        }
        return false;
    }
  
      getEmail(email) {
        this.#email = email;
      }

    }
  
module.exports = Pessoa;