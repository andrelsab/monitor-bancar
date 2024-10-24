Este projeto é uma API para emissão e monitoramento de boletos bancários de diferentes bancos.
Participantes: André Leite Sabiar 113184-2023, Lyncoln Lima Sabiar 113277-2023, Larissa Queiroz Daminelli Honda 95594-2022 e Karina Barbosa da Silva 108928-2023.
4° Semestre Engenharia de Software Noturno

Requisitos
Node.js (v16 ou superior)
PostgreSQL (para o banco de dados)
DBeaver (opcional, para visualizar o banco de dados)


1. Extrair o ZIP
Extraia o conteúdo do arquivo ZIP do projeto para uma pasta local.

2. Abrir a Pasta no VS Code
Abra a pasta do projeto no Visual Studio Code.

3. Configurar o Banco de Dados
Crie um banco de dados PostgreSQL utilizando um software de manipulação de banco de dados:

CREATE DATABASE monitor_bancario;


4. Iniciar o Servidor
ATENÇÃO: Se você estiver utilizando uma senha diferente para o PostgreSQL, altere o último campo 'postgres' na linha 3 do arquivo database.ts para corresponder à senha configurada no PostgreSQL local.

no terminal bash:
npm run dev

O servidor estará rodando em http://localhost:3000.


Você pode observar os dados sendo armazenados diretamente no banco de dados.
Para verificar todos os registros de boletos, execute a seguinte consulta no banco de dados:

SELECT * FROM boletos b;


Testar a API
Monitorar o Status de um Banco
Use o seguinte endpoint para verificar o status de um banco:

GET http://localhost:3000/monitorar/:banco
Substitua :banco pelo código do banco (ex.: 104 para Caixa).