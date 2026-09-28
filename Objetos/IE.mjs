import PJ from '../pessoas/PJ.mjs';

export default class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    constructor(numero = '', estado = '', dataRegistro = new Date(), pj = null) {
        this.#numero = numero;
        this.#estado = estado;
        this.#dataRegistro = dataRegistro;
        this.setPJ(pj);
    }

    setNumero(numero) {
        this.#numero = numero;
        return true;
    }

    getNumero() {
        return this.#numero;
    }

    setEstado(estado) {
        this.#estado = estado;
        return true;
    }

    getEstado() {
        return this.#estado;
    }

    setDataRegistro(dataRegistro) {
        if (dataRegistro instanceof Date) {
            this.#dataRegistro = dataRegistro;
            return true;
        }
        return false;
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        }
        return false;
    }

    getPJ() {
        return this.#pj;
    }
}

export function IEfunc(numero = '', estado = '', dataRegistro = new Date(), pj = null) {
    let _numero = numero;
    let _estado = estado;
    let _dataRegistro = dataRegistro;
    let _pj = null;

    if (pj instanceof PJ) {
        _pj = pj;
    }

    return {
        setNumero(numero) {
            _numero = numero;
            return true;
        },
        getNumero() {
            return _numero;
        },
        setEstado(estado) {
            _estado = estado;
            return true;
        },
        getEstado() {
            return _estado;
        },
        setDataRegistro(dataRegistro) {
            if (dataRegistro instanceof Date) {
                _dataRegistro = dataRegistro;
                return true;
            }
            return false;
        },
        getDataRegistro() {
            return _dataRegistro;
        },
        setPJ(pj) {
            if (pj instanceof PJ) {
                _pj = pj;
                return true;
            }
            return false;
        },
        getPJ() {
            return _pj;
        }
    };
}

export const IEjson = {
    _numero: '',
    _estado: '',
    _dataRegistro: new Date(),
    _pj: null,

    setNumero(numero) {
        this._numero = numero;
        return true;
    },
    getNumero() {
        return this._numero;
    },
    setEstado(estado) {
        this._estado = estado;
        return true;
    },
    getEstado() {
        return this._estado;
    },
    setDataRegistro(dataRegistro) {
        if (dataRegistro instanceof Date) {
            this._dataRegistro = dataRegistro;
            return true;
        }
        return false;
    },
    getDataRegistro() {
        return this._dataRegistro;
    },
    setPJ(pj) {
        if (pj instanceof PJ) {
            this._pj = pj;
            return true;
        }
        return false;
    },
    getPJ() {
        return this._pj;
    }
};