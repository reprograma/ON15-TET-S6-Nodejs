# Respostas
1º) Qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?

Primeiramente, eu interessante entender o que é CRUD, que nesse caso seria uma tela de cadastro, com operações em bancos de dados, que surgiu a partir de 4 operações básicas de um banco de dados: Insert, Select, Update e Delete.

-  Create – Criar um novo registro.

-  Read – Ler um registro, ou um conjunto de registros.

-  Update – Atualizar um registro.

-  Delete – Excluir um registro.

Quanto ao nível de maturidade, é correspondido pelo nível 2, que é quando a API fica muito mais legível para manutenções, reduzindo seu custo e passando ser mais fácil de ser consumida, já que os níveis 0 e 1 são mais desorganizados.

2º) Qual a relação entre os métodos HTTP e CRUD? 

Os verbos do HTTP são: POST, GET, PUT e DELETE. Uma relação com o CRUD é a utilização desses verbos para serem mapeados em termos CRUD (Create, Read, Update e Delete) por  desenvolvedores.
O HTTP envia pedidos para os servidores por meio dos clientes, enquanto que servidores mandam respostas para pedidos. Enquanto isso, são usadas as solicitações HTTP para enviar as operações CRUD, utilizando-se verbos.

3º) O que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?

É uma restrição que está dentro da arquitetura de aplicações REST, que tem o objetivo de ajudar os clientes a consumirem o serviço sem a necessidade de conhecimento prévio profundo da API.
Sua sigla vem de Hypermedia As the Engine Of Application State, além disso, “Hypermedia” da uma ideia de como este componente funciona em uma aplicação RESTful. Ao ser implementado, a API passa a fornecer links que indicarão aos clientes como navegar utilizando seus recursos.

4º) O que quer dizer quando dizemos que uma API é idempotente?

 Isso ocorre quando o efeito pretendido sobre o servidor de várias solicitações idênticas com esse método é o o mesmo que o efeito para uma única solicitação desse tipo. Dos métodos de solicitação definidos por esta especificação, PUT, DELETE e métodos de solicitação segura são idempotentes.

5º) Qual a diferença entre os métodos PUT e PATCH?

O PUT é, normalmente, usado como parâmetro, para editar um recurso. Ele deve passar todos os dados do recurso preenchidos, independente de quais dados você de fato editou.
Já o PATCH é usado para editar o recurso sem a necessidade de enviar todos os atributos – o consumidor envia apenas aquilo que de fato foi alterado 
