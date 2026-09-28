class Pj{
    #cnpj
    #razaoSocial    

    getCnpj() {
        return this.#cnpj;
    }

    setCnpj(cnpj) {
        if(cnpj != 'null') {
            return true;
        } else {
            return false;
        }
    }

    getRazaoSocial() {
        return this.#razaoSocial;
    }

    setRazaoSocial() {
        if(razaoSocial === '') {
            console.log("O campo razão social não pode estar vazio");
            return false;
        } else {
            return true;
        }
    }
}