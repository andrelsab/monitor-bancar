import express, { Request, Response } from 'express';
import { sequelize } from './database';
import { Boleto } from './models/boleto';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.json());

sequelize.authenticate().then(() => {
  console.log('Banco de dados conectado com sucesso.');
});

sequelize.sync({ force: true }).then(() => {
  console.log('Tabelas sincronizadas.');
});

// Função para emitir boleto para um banco específico
const emitirBoleto = async (banco: string, parametrosBoleto: any) => {
  const inicio = Date.now();

  try {
    // Headers com CNPJ, token e CNPJ do Cedente
    const headers = {
      'cnpj-sh': '12067625000150',
      'token-sh': 'a60c428fbfcafa73bc8eda5e9b7fee4e',
      'cnpj-cedente': '87734092000111'
    };

    console.log('Headers enviados:', JSON.stringify(headers, null, 2));/// console do header

    // URL da API bancária
    const apiURL = `https://homologacao.plugboleto.com.br/api/v1/boletos/lote`;

    // Disparar a requisição para a API de emissão de boletos com parâmetros e headers
    console.log('Payload enviado:', JSON.stringify(parametrosBoleto, null, 2));

    const response = await axios.post(apiURL, parametrosBoleto, { headers });
    const tempo_resposta = Date.now() - inicio;

    // Armazenar a resposta no banco de dados
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

    // Armazenar o erro no banco de dados
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

const emitirBoleto2 = async (banco: string, parametrosBoleto: any) => {
  const inicio = Date.now();

  try {
    // Headers com CNPJ, token e CNPJ do Cedente
    const headers = {
      'cnpj-sh': '12067625000150',
      'token-sh': 'a60c428fbfcafa73bc8eda5e9b7fee4e',
      'cnpj-cedente': '87734092000111'
    };

    console.log('Headers enviados:', JSON.stringify(headers, null, 2));/// console do header

    // URL da API bancária
    const apiURL = `https://homologacao.plugboleto.com.br/api/v1/boletos/lote`;

    // Disparar a requisição para a API de emissão de boletos com parâmetros e headers
    console.log('Payload enviado:', JSON.stringify(parametrosBoleto, null, 2));

    const response = await axios.post(apiURL, parametrosBoleto, { headers });
    const tempo_resposta = Date.now() - inicio;

    // Armazenar a resposta no banco de dados
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

    // Armazenar o erro no banco de dados
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

// Definir os parâmetros do boleto a serem enviados para a API bancária
const parametrosBoleto = [
  {
    CedenteContaNumero: "1231",
    CedenteContaNumeroDV: "6",
    CedenteConvenioNumero: "1234567",
    CedenteContaCodigoBanco: "104",
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
    SacadoNome: "Teste de Souza",
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
    TituloNossoNumero: "33267834567",
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
    CedenteContaCodigoBanco: "077",

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
    SacadoNome: "Teste de Souza",
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

// Disparar a emissão de boletos para o banco a cada 5 minutos (300.000 ms)
setInterval(() => {
  emitirBoleto('104', parametrosBoleto);
  emitirBoleto2('077', parametrosBoleto2); // Substitua '104' pelo código do banco conforme necessário
}, 30000); // 300000 ms = 5 minutos

// Rota manual para monitorar o status de um serviço de boleto (já existente)
app.get('/monitorar/:banco', async (req: Request, res: Response) => {
  const { banco } = req.params;
  const inicio = Date.now();

  try {
    const response = await axios.get(`https://api-ficticia.com/${banco}/boleto`);
    const tempo_resposta = Date.now() - inicio;

    const novoRegistro = await Boleto.create({
      banco,
      status_code: response.status,
      tempo_resposta,
      tipo: 'consulta',
      payload: response.data,
    });

    res.status(200).json(novoRegistro);
  } catch (error: any) {
    const tempo_resposta = Date.now() - inicio;

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

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
