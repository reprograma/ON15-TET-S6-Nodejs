# Respostas
Pesquise sobre os niveis de maturidade de Richardsson e responda:
1) qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?
O nível 2 de maturidade

2) qual a relação entre os metodos HTTP e o CRUD?
Os dois métodos são correspondentes, dessa forma:
POST -> Create 
GET -> Read
PUT/PATCH -> Update
DELETE -> Delete

3) o que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?
HATEOAS significa Hypermedia as the Engine of Application State e ao ser implementado na API, essa passa a fornecer URIs que indicarão aos clientes como navegar através dos seus recursos. Por fim, uma API é considerada RESTfull quando há implementação do HATEOAS, já que seu uso corresponde ao nível 3 de maturidade de Richardsson.

4) O que quer dizer quando dizemos que uma API é idempotente?
Um método é considerado idempotente se o resultado de uma requisição realizada com sucesso é independente do número de vezes que é executada. Sendo assim, quando uma API utiliza métodos HTTP idempotentes, como por exemplo, GET, PUT, DELETE e HEAD, é considerada uma API idempotente. O POST não é considerado um método idempotente, pois a cada requisição, será criado um recurso e haverá alteração do estado da aplicação.

5) Qual a diferença entre os métodos PUT e PATCH?
Tanto o PUT quanto o PATCH são utilizados para indicar uma requisição de alteração de dados, no entanto o método PUT altera o dado com referência a entidade completa e o PATCH é utilizado para atualização parcial. 