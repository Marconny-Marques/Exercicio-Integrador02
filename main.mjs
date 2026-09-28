import PJ from './pessoas/PJ.mjs';
import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs';

function mostrarIE(ie) {
    const pj = ie.getPJ();
    
    console.log('=== Inscrição Estadual ===');
    console.log(`Número: ${ie.getNumero()}`);
    console.log(`Estado: ${ie.getEstado()}`);
    console.log(`Data de Registro: ${ie.getDataRegistro() ? ie.getDataRegistro().toLocaleString('pt-BR') : 'N/A'}`);
    
    if (pj) {
        console.log('\n=== Pessoa Jurídica ===');
        console.log(`Nome: ${pj.getNome()}`);
        console.log(`E-mail: ${pj.getEmail()}`);
        console.log(`CNPJ: ${pj.getCNPJ()}`);
        console.log(`Razão Social: ${pj.getRazaoSocial()}`);
    } else {
        console.log('Pessoa Jurídica: Não associada ou inválida');
    }
    console.log('------------------------------------\n');
}

const pj1 = new PJ();
pj1.setNome('Tech Solutions Ltda');
pj1.setEmail('contato@techsolutions.com');
pj1.setCNPJ('12345678000199'); 
pj1.setRazaoSocial('Tech Solutions Desenvolvimento de Software Ltda');

const pj2 = new PJ();
pj2.setNome('Inovação & Cia');
pj2.setEmail('financeiro@inovacao.com');
pj2.setCNPJ('98765432000111');
pj2.setRazaoSocial('Inovação e Tecnologia S.A.');

const dataAtual = new Date();

const ieClasse = new IEclss('111.222.333.444', 'DF', dataAtual);
const ieFuncao = IEfunc('555.666.777.888', 'SP', dataAtual);

IEjson.setNumero('999.888.777.666');
IEjson.setEstado('RJ');
IEjson.setDataRegistro(dataAtual);

const objetoInvalido = { nome: 'Empresa Inválida' };

console.log('=== Testes de Validação (instanceof) ===');
console.log('Associação Inválida em Classe:', ieClasse.setPJ(objetoInvalido)); 
console.log('Associação Inválida em Função:', ieFuncao.setPJ(objetoInvalido)); 
console.log('Associação Inválida em Objeto Literal:', IEjson.setPJ(objetoInvalido)); 

console.log('Associação Válida em Classe:', ieClasse.setPJ(pj1)); 
console.log('Associação Válida em Função:', ieFuncao.setPJ(pj2)); 
console.log('Associação Válida em Objeto Literal:', IEjson.setPJ(pj1));
console.log('------------------------------------\n');

console.log('>>> TESTANDO IE COM CLASSE <<<');
mostrarIE(ieClasse);

console.log('>>> TESTANDO IE COM FUNÇÃO FÁBRICA <<<');
mostrarIE(ieFuncao);

console.log('>>> TESTANDO IE COM OBJETO LITERAL <<<');
mostrarIE(IEjson);

console.log('=== Desafio Extra 2: Recuperação com getPJ() ===');
console.log(`Razão Social (Classe): ${ieClasse.getPJ().getRazaoSocial()}`);
console.log(`Razão Social (Função Fábrica): ${ieFuncao.getPJ().getRazaoSocial()}`);