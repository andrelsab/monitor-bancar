import express, { Request, Response } from 'express';
import { sequelize } from './database';
import { Boleto } from './models/boleto';
import axios from 'axios';
import { Op } from 'sequelize'; // Import Sequelize Op for date filtering

const app = express();
const port = 3000;

app.use(express.json());

sequelize.authenticate().then(() => {
  console.log('Banco de dados conectado com sucesso.');
});

sequelize.sync({ force: true }).then(() => {
  console.log('Tabelas sincronizadas.');
});


// Função para gerar um número aleatório de até 7 dígitos sem repetição
const gerarNumeroUnico = (tamanho = 6) => {
  return Math.floor(Math.random() * Math.pow(10, tamanho)).toString().padStart(tamanho, '0');
};

// Função para emitir boleto para um banco específico
const emitirBoleto = async (banco: string, parametrosBoleto: any) => {
  const inicio = Date.now();

  try {
    // Gera número único para o campo 'TituloNossoNumero'
    parametrosBoleto[0].TituloNossoNumero = gerarNumeroUnico();

    const headers = {
      'cnpj-sh': '12067625000150',
      'token-sh': 'a60c428fbfcafa73bc8eda5e9b7fee4e',
      'cnpj-cedente': '87734092000111'
    };

    console.log('Headers enviados:', JSON.stringify(headers, null, 2));

    const apiURL = `https://homologacao.plugboleto.com.br/api/v1/boletos/lote`;

    console.log('Payload enviado:', JSON.stringify(parametrosBoleto, null, 2));

    const response = await axios.post(apiURL, parametrosBoleto, { headers });
    const tempo_resposta = Date.now() - inicio;

    const novoRegistro = await Boleto.create({
      banco,
      status_code: response.status,
      tempo_resposta,
      tipo: 'emissao',
      payload: response.data,
    });

    console.log('Boleto emitido com sucesso:', novoRegistro);
  } catch (error: any) {
    const tempo_resposta = Date.now() - inicio;

    const erroRegistro = await Boleto.create({
      banco,
      status_code: error.response ? error.response.status : 500,
      tempo_resposta,
      tipo: 'emissao',
      payload: error.response ? error.response.data : {},
    });

    console.log('Erro ao emitir boleto:', erroRegistro);
  }
};

const emitirBoleto2 = async (banco: string, parametrosBoleto2: any) => {
  const inicio = Date.now();

  try {
        
    const headers = {
      'cnpj-sh': '12067625000150',
      'token-sh': 'a60c428fbfcafa73bc8eda5e9b7fee4e',
      'cnpj-cedente': '87734092000111'
    };

    console.log('Headers enviados:', JSON.stringify(headers, null, 2));

    const apiURL = `https://homologacao.plugboleto.com.br/api/v1/boletos/lote`;

    console.log('Payload enviado:', JSON.stringify(parametrosBoleto2, null, 2));

    const response = await axios.post(apiURL, parametrosBoleto2, { headers });
    const tempo_resposta = Date.now() - inicio;

    const novoRegistro = await Boleto.create({
      banco,
      status_code: response.status,
      tempo_resposta,
      tipo: 'emissao',
      payload: response.data,
    });

    console.log('Boleto emitido com sucesso:', novoRegistro);
  } catch (error: any) {
    const tempo_resposta = Date.now() - inicio;

    const erroRegistro = await Boleto.create({
      banco,
      status_code: error.response ? error.response.status : 500,
      tempo_resposta,
      tipo: 'emissao',
      payload: error.response ? error.response.data : {},
    });

    console.log('Erro ao emitir boleto:', erroRegistro);
  }
};

const emitirBoleto3 = async (banco: string, parametrosBoleto3: any) => {
  const inicio = Date.now();

  try {
    // Gera número único para o campo 'TituloNossoNumero'
    parametrosBoleto3[0].TituloNossoNumero = gerarNumeroUnico();

    const headers = {
      'cnpj-sh': '12067625000150',
      'token-sh': 'a60c428fbfcafa73bc8eda5e9b7fee4e',
      'cnpj-cedente': '87734092000111'
    };

    console.log('Headers enviados:', JSON.stringify(headers, null, 2));

    const apiURL = `https://homologacao.plugboleto.com.br/api/v1/boletos/lote`;

    console.log('Payload enviado:', JSON.stringify(parametrosBoleto3, null, 2));

    const response = await axios.post(apiURL, parametrosBoleto3, { headers });
    const tempo_resposta = Date.now() - inicio;

    const novoRegistro = await Boleto.create({
      banco,
      status_code: response.status,
      tempo_resposta,
      tipo: 'emissao',
      payload: response.data,
    });

    console.log('Boleto emitido com sucesso:', novoRegistro);
  } catch (error: any) {
    const tempo_resposta = Date.now() - inicio;

    const erroRegistro = await Boleto.create({
      banco,
      status_code: error.response ? error.response.status : 500,
      tempo_resposta,
      tipo: 'emissao',
      payload: error.response ? error.response.data : {},
    });

    console.log('Erro ao emitir boleto:', erroRegistro);
  }
};
const emitirBoleto4 = async (banco: string, parametrosBoleto4: any) => {
  const inicio = Date.now();

  try {
    // Gera número único para o campo 'TituloNossoNumero'
    parametrosBoleto4[0].TituloNossoNumero = gerarNumeroUnico();

    const headers = {
      'cnpj-sh': '12067625000150',
      'token-sh': 'a60c428fbfcafa73bc8eda5e9b7fee4e',
      'cnpj-cedente': '87734092000111'
    };

    console.log('Headers enviados:', JSON.stringify(headers, null, 2));

    const apiURL = `https://homologacao.plugboleto.com.br/api/v1/boletos/lote`;

    console.log('Payload enviado:', JSON.stringify(parametrosBoleto4, null, 2));

    const response = await axios.post(apiURL, parametrosBoleto4, { headers });
    const tempo_resposta = Date.now() - inicio;

    const novoRegistro = await Boleto.create({
      banco,
      status_code: response.status,
      tempo_resposta,
      tipo: 'emissao',
      payload: response.data,
    });

    console.log('Boleto emitido com sucesso:', novoRegistro);
  } catch (error: any) {
    const tempo_resposta = Date.now() - inicio;

    const erroRegistro = await Boleto.create({
      banco,
      status_code: error.response ? error.response.status : 500,
      tempo_resposta,
      tipo: 'emissao',
      payload: error.response ? error.response.data : {},
    });

    console.log('Erro ao emitir boleto:', erroRegistro);
  }
};
const emitirBoleto5 = async (banco: string, parametrosBoleto5: any) => {
  const inicio = Date.now();

  try {
    // Gera número único para o campo 'TituloNossoNumero'
    parametrosBoleto5[0].TituloNossoNumero = gerarNumeroUnico();

    const headers = {
      'cnpj-sh': '12067625000150',
      'token-sh': 'a60c428fbfcafa73bc8eda5e9b7fee4e',
      'cnpj-cedente': '87734092000111'
    };

    console.log('Headers enviados:', JSON.stringify(headers, null, 2));

    const apiURL = `https://homologacao.plugboleto.com.br/api/v1/boletos/lote`;

    console.log('Payload enviado:', JSON.stringify(parametrosBoleto5, null, 2));

    const response = await axios.post(apiURL, parametrosBoleto5, { headers });
    const tempo_resposta = Date.now() - inicio;

    const novoRegistro = await Boleto.create({
      banco,
      status_code: response.status,
      tempo_resposta,
      tipo: 'emissao',
      payload: response.data,
    });

    console.log('Boleto emitido com sucesso:', novoRegistro);
  } catch (error: any) {
    const tempo_resposta = Date.now() - inicio;

    const erroRegistro = await Boleto.create({
      banco,
      status_code: error.response ? error.response.status : 500,
      tempo_resposta,
      tipo: 'emissao',
      payload: error.response ? error.response.data : {},
    });

    console.log('Erro ao emitir boleto:', erroRegistro);
  }
};
const emitirBoleto6 = async (banco: string, parametrosBoleto6: any) => {
  const inicio = Date.now();

  try {
    // Gera número único para o campo 'TituloNossoNumero'
    parametrosBoleto6[0].TituloNossoNumero = gerarNumeroUnico();

    const headers = {
      'cnpj-sh': '12067625000150',
      'token-sh': 'a60c428fbfcafa73bc8eda5e9b7fee4e',
      'cnpj-cedente': '87734092000111'
    };

    console.log('Headers enviados:', JSON.stringify(headers, null, 2));

    const apiURL = `https://homologacao.plugboleto.com.br/api/v1/boletos/lote`;

    console.log('Payload enviado:', JSON.stringify(parametrosBoleto6, null, 2));

    const response = await axios.post(apiURL, parametrosBoleto6, { headers });
    const tempo_resposta = Date.now() - inicio;

    const novoRegistro = await Boleto.create({
      banco,
      status_code: response.status,
      tempo_resposta,
      tipo: 'emissao',
      payload: response.data,
    });

    console.log('Boleto emitido com sucesso:', novoRegistro);
  } catch (error: any) {
    const tempo_resposta = Date.now() - inicio;

    const erroRegistro = await Boleto.create({
      banco,
      status_code: error.response ? error.response.status : 500,
      tempo_resposta,
      tipo: 'emissao',
      payload: error.response ? error.response.data : {},
    });

    console.log('Erro ao emitir boleto:', erroRegistro);
  }
};
const emitirBoleto7 = async (banco: string, parametrosBoleto7: any) => {
  const inicio = Date.now();

  try {
    // Gera número único para o campo 'TituloNossoNumero'
    parametrosBoleto7[0].TituloNossoNumero = gerarNumeroUnico();

    const headers = {
      'cnpj-sh': '12067625000150',
      'token-sh': 'a60c428fbfcafa73bc8eda5e9b7fee4e',
      'cnpj-cedente': '87734092000111'
    };

    console.log('Headers enviados:', JSON.stringify(headers, null, 2));

    const apiURL = `https://homologacao.plugboleto.com.br/api/v1/boletos/lote`;

    console.log('Payload enviado:', JSON.stringify(parametrosBoleto7, null, 2));

    const response = await axios.post(apiURL, parametrosBoleto7, { headers });
    const tempo_resposta = Date.now() - inicio;

    const novoRegistro = await Boleto.create({
      banco,
      status_code: response.status,
      tempo_resposta,
      tipo: 'emissao',
      payload: response.data,
    });

    console.log('Boleto emitido com sucesso:', novoRegistro);
  } catch (error: any) {
    const tempo_resposta = Date.now() - inicio;

    const erroRegistro = await Boleto.create({
      banco,
      status_code: error.response ? error.response.status : 500,
      tempo_resposta,
      tipo: 'emissao',
      payload: error.response ? error.response.data : {},
    });

    console.log('Erro ao emitir boleto:', erroRegistro);
  }
};
const parametrosBoleto = [
  {
    CedenteContaNumero: "1231",
    CedenteContaNumeroDV: "6",
    CedenteConvenioNumero: "1234567",
    CedenteContaCodigoBanco: "104",//caixa
    SacadoCPFCNPJ: "28436161661",
    SacadoEmail: "email@sacado.com",
    SacadoEnderecoNumero: "987",
    SacadoEnderecoBairro: "Centro",
    SacadoEnderecoCEP: "87098765",
    SacadoEnderecoCidade: "Maringá",
    SacadoEnderecoComplemento: "Fundos",
    SacadoEnderecoLogradouro: "Rua teste",
    SacadoEnderecoPais: "Brasil",
    SacadoEnderecoUF: "PR",
    SacadoNome: "TESTE 04/01",
    SacadoTelefone: "4499999999",
    SacadoCelular: "44999999999",
    TituloDataEmissao: "22/10/2024",
    TituloDataVencimento: "30/11/2024",
    TituloIdentificacaoTipoPagamento: "03",
    TituloPrazoBaixa: "30",
    TituloCodProtesto: "1",
    TituloPrazoProtesto: "20",
    Titulodocespecie: "01",
    Tituloaceite: "N",
    TituloMensagem03: "Titulo sujeito a protesto apos 30 dias",
    TituloMensagem01: "Conceder desconto de R$2,00 até dia 27/12/2018",
    TituloNossoNumero: "",//----------------------------------alterar
    TituloNumeroDocumento: "01041202022",
    TituloValor: "355,00",
    TituloLocalPagamento: "Pagável em qualquer banco até o vencimento."
  }
];

const parametrosBoleto2 = [
  {
    CedenteContaNumero: "56789",
    CedenteContaNumeroDV: "1",
    CedenteConvenioNumero: "123456",
    CedenteContaCodigoBanco: "077",//inter
    SacadoCPFCNPJ: "28436161661",
    SacadoEmail: "email@sacado.com",
    SacadoEnderecoNumero: "987",
    SacadoEnderecoBairro: "Centro",
    SacadoEnderecoCEP: "87098765",
    SacadoEnderecoCidade: "Maringá",
    SacadoEnderecoComplemento: "Fundos",
    SacadoEnderecoLogradouro: "Rua teste",
    SacadoEnderecoPais: "Brasil",
    SacadoEnderecoUF: "PR",
    SacadoNome: "TESTE 04/01",
    SacadoTelefone: "4499999999",
    SacadoCelular: "44999999999",
    TituloDataEmissao: "21/10/2024",
    TituloDataVencimento: "25/10/2024",
    TituloMensagem01: "Juros de 0,01 ao dia",
    TituloMensagem02: "Nao receber apos 30 dias de atraso",
    TituloMensagem03: "Titulo sujeito a protesto apos 30 dias",
    TituloNumeroDocumento: "01012020",
    TituloValor: "150,00",
    TituloLocalPagamento: "Pagável em qualquer banco até o vencimento."
  }
];
const parametrosBoleto3 = [
  {
    CedenteContaNumero: "060771540",
    CedenteContaNumeroDV: "6",
    CedenteConvenioNumero: "771540279",
    CedenteContaCodigoBanco: "041",// banrisul
    SacadoCPFCNPJ: "28436161661",
    SacadoEmail: "email@sacado.com",
    SacadoEnderecoNumero: "987",
    SacadoEnderecoBairro: "Centro",
    SacadoEnderecoCEP: "87098765",
    SacadoEnderecoCidade: "Maringá",
    SacadoEnderecoComplemento: "Fundos",
    SacadoEnderecoLogradouro: "Rua teste",
    SacadoEnderecoPais: "Brasil",
    SacadoEnderecoUF: "PR",
    SacadoNome: "TESTE 04/01",
    SacadoTelefone: "4499999999",
    SacadoCelular: "44999999999",
    TituloDataEmissao: "21/10/2024",
    TituloDataVencimento: "25/10/2024",
    TituloMensagem01: "Juros de 0,01 ao dia",
    TituloMensagem02: "Nao receber apos 30 dias de atraso",
    TituloNossoNumero: "",//------------------------------alterar
    TituloNumeroDocumento: "01012020",
    TituloValor: "150,00",
    TituloLocalPagamento: "Pagável em qualquer banco até o vencimento."
  }
];
const parametrosBoleto4 = [
  {
    CedenteContaNumero: "1234567",
    CedenteContaNumeroDV: "8",
    CedenteConvenioNumero: "123456",
    CedenteContaCodigoBanco: "756",// SICOOB
    SacadoCPFCNPJ: "28436161661",
    SacadoEmail: "email@sacado.com",
    SacadoEnderecoNumero: "987",
    SacadoEnderecoBairro: "Centro",
    SacadoEnderecoCEP: "87098765",
    SacadoEnderecoCidade: "Maringá",
    SacadoEnderecoComplemento: "Fundos",
    SacadoEnderecoLogradouro: "Rua teste",
    SacadoEnderecoPais: "Brasil",
    SacadoEnderecoUF: "PR",
    SacadoNome: "TESTE 04/01",
    SacadoTelefone: "4499999999",
    SacadoCelular: "44999999999",
    TituloDataEmissao: "21/10/2024",
    TituloDataVencimento: "25/10/2024",
    TituloMensagem01: "Juros de 0,01 ao dia",
    TituloMensagem02: "Nao receber apos 30 dias de atraso",
    TituloNossoNumero: "",//------------------------------alterar
    TituloNumeroDocumento: "01012020",
    TituloValor: "150,00",
    TituloLocalPagamento: "Pagável em qualquer banco até o vencimento."
  }
];

const parametrosBoleto5 = [
  {
    CedenteContaNumero: "123456",
    CedenteContaNumeroDV: "7",
    CedenteConvenioNumero: "01",
    CedenteContaCodigoBanco: "001", // bb
    SacadoCPFCNPJ: "28436161661",
    SacadoEmail: "email@sacado.com",
    SacadoEnderecoNumero: "987",
    SacadoEnderecoBairro: "Centro",
    SacadoEnderecoCEP: "87098765",
    SacadoEnderecoCidade: "Maringá",
    SacadoEnderecoComplemento: "Fundos",
    SacadoEnderecoLogradouro: "Rua teste",
    SacadoEnderecoPais: "Brasil",
    SacadoEnderecoUF: "PR",
    SacadoNome: "TESTE 04/01",
    SacadoTelefone: "4499999999",
    SacadoCelular: "44999999999",
    TituloDataEmissao: "21/10/2024",
    TituloDataVencimento: "25/10/2024",
    TituloMensagem01: "Juros de 0,01 ao dia",
    TituloMensagem02: "Não receber após 30 dias de atraso",
    TituloMensagem03: "Título sujeito a protesto após 30 dias",
    TituloNumeroDocumento: "01012020",
    TituloValor: "150,00", // Corrigido o formato do valor
    TituloLocalPagamento: "Pagável em qualquer banco até o vencimento.",
    TituloNossoNumero: "252525"
  }
];


const parametrosBoleto6 = [
  {
    CedenteContaNumero: "123456",
    CedenteContaNumeroDV: "6",
    CedenteConvenioNumero: "02",
    CedenteContaCodigoBanco: "033",
	
    SacadoCPFCNPJ: "28436161661",
    SacadoEmail: "email@sacado.com",
    SacadoEnderecoNumero: "987",
    SacadoEnderecoBairro: "Centro",
    SacadoEnderecoCEP: "87098765",
    SacadoEnderecoCidade: "Maringá",
    SacadoEnderecoComplemento: "Fundos",
    SacadoEnderecoLogradouro: "Rua teste, 987",
    SacadoEnderecoPais: "Brasil",
    SacadoEnderecoUF: "PR",
    SacadoNome: "TESTE 04/01",
    SacadoTelefone: "4499999999",
    SacadoCelular: "44999999999",
    TituloDataEmissao: "21/10/2024",
    TituloDataVencimento: "21/11/2024",
    TituloCodBaixaDevolucao: "1",
    TituloPrazoBaixa: "1",
    Titulodocespecie: "01",
    Tituloaceite: "N",
    TituloMensagem03: "Titulo sujeito a protesto apos 30 dias",
    TituloNossoNumero: "653339",
    TituloNumeroDocumento: "010412020",
    TituloValor: "50,00",
    TituloLocalPagamento: "Pagável em qualquer banco até o vencimento."
  }
];

const parametrosBoleto7 = [
  {
    CedenteContaNumero: "12345",
    CedenteContaNumeroDV: "6",
    CedenteConvenioNumero: "12345",
    CedenteContaCodigoBanco: "748",
    SacadoCPFCNPJ: "28436161661", 
    SacadoEmail: "email@sacado.com",
    SacadoEnderecoNumero: "987",
    SacadoEnderecoBairro: "Centro",
    SacadoEnderecoCEP: "87098765",
    SacadoEnderecoCidade: "Maringá",
    SacadoEnderecoComplemento: "Fundos",
    SacadoEnderecoLogradouro: "Rua teste",
    SacadoEnderecoPais: "Brasil",
    SacadoEnderecoUF: "PR",
    SacadoNome: "TESTE 04/01",
    SacadoTelefone: "4499999999",
    SacadoCelular: "44999999999", 
    TituloDataEmissao: "21/10/2024",
    TituloDataVencimento: "25/10/2024",
    TituloMensagem01: "Juros de 0,01 ao dia",
    TituloMensagem02: "Não receber após 30 dias de atraso",
    TituloMensagem03: "Título sujeito a protesto após 30 dias",
    TituloNumeroDocumento: "01012020",
    TituloValor: "150,00", 
    TituloLocalPagamento: "Pagável em qualquer banco até o vencimento.",
    TituloNossoNumero: "" 
  }
];

setInterval(() => {
  emitirBoleto('104', parametrosBoleto);
  emitirBoleto2('077', parametrosBoleto2);
  emitirBoleto3('041', parametrosBoleto3);
  emitirBoleto4('756', parametrosBoleto4);
  emitirBoleto5('001', parametrosBoleto5);
  emitirBoleto6('033', parametrosBoleto6);
  emitirBoleto7('748', parametrosBoleto7);

}, 30000); // A cada 5 minutos

// Rota manual para monitorar o status de um serviço de boleto (já existente)
app.get('/monitorar/:banco', async (req: Request, res: Response) => {
  const { banco } = req.params;
  const inicio = Date.now();

  // Cabeçalhos necessários para a requisição à API externa
  const headers = {
    'cnpj-sh': '12067625000150',
    'token-sh': 'a60c428fbfcafa73bc8eda5e9b7fee4e',
    'cnpj-cedente': '87734092000111'
  };

  try {
    // URL da API externa - certifique-se de que está correta
    const response = await axios.get(`https://homologacao.plugboleto.com.br/api/v1/boletos/lote`, { headers });
    const tempo_resposta = Date.now() - inicio;

    // Armazenar a resposta no banco de dados
    const novoRegistro = await Boleto.create({
      banco,
      status_code: response.status,
      tempo_resposta,
      tipo: 'consulta',
      payload: response.data,
    });

    res.status(200).json(novoRegistro);
  } catch (error: any) {
    console.error('Erro na requisição:', error.message);

    // Verifica se existe uma resposta da API com detalhes do erro
    if (error.response) {
      console.error('Detalhes do erro:', error.response.data);
    }

    const tempo_resposta = Date.now() - inicio;

    // Armazenar o erro no banco de dados
    const erroRegistro = await Boleto.create({
      banco,
      status_code: error.response ? error.response.status : 500,
      tempo_resposta,
      tipo: 'consulta',
      payload: error.response ? error.response.data : {},
    });

    res.status(500).json(erroRegistro);
  }
});


// Rota para listar requisições por período e segmentadas por banco
app.get('/relatorio/requisicoes', async (req: Request, res: Response) => {
  const { banco, dataInicio, dataFim } = req.query;

  try {
    const whereClause: any = {};

    // Filtro opcional por banco
    if (banco) {
      whereClause.banco = banco;
    }

    // Filtro por intervalo de datas
    if (dataInicio && dataFim) {
      whereClause.createdAt = {
        [Op.between]: [new Date(dataInicio as string), new Date(dataFim as string)]
      };
    }

    const boletos = await Boleto.findAll({
      where: whereClause,
      order: [['createdAt', 'ASC']] // Ordenar por data
    });

    res.status(200).json(boletos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar relatório de requisições' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


