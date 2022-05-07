# Respostas

**1°)** Nível de maturidade 2, onde é utilizado os verbos HTTP.

 * **C**: Create (criar) - criar um novo registro
 * **R**: Read (ler) - ler (exibir) as informações de um registro
 * **U**: Update (atualizar) - atualizar os dados do registro
 * **D**: Delete (apagar) - apagar um registro

**2°)** O protocolo HTTP define o conjunto de **métodos requisição** responsável por indicar a ação a ser executada para um dado recurso. O CRUD é conhecido como os verbos HTTP.

**3°)** HATEOAS é uma restrição que faz parte da arquitetura de aplicações REST, cujo objetivo é ajudar os clientes a consumirem o serviço sem a necessidade de conhecimento prévio profundo da API.

  O acrônimo HATEOAS vem de Hypermedia As the Engine Of Application State e o termo “hypermedia” no seu nome já dá uma ideia de como este componente funciona em uma aplicação RESTful. Ao ser implementado, a API passa a fornecer links que indicarão aos clientes como navegar através dos seus recursos.

  O que é HATEOAS? Hypermedia as the Engine of Application State, ou HATEOAS, é uma “maneira” de implementar APIs REST utilizando hipermídia para indicar que ações ou navegações estão disponíveis para um determinado recurso.
  Na teoria diz que para uma API ser RESTFul deve implementar todos os padrões REST.

**4°)** 
No contexto das APIs REST, fazer várias solicitações idênticas tem o mesmo efeito que fazer uma única solicitação – então essa API REST é chamada de idempotente.

**5°)**
O **PUT**, é usado para alteração de um dado completo.
O **PATCH** é usado para atualização parcial.

Geralmente, ao usar-se o **PUT**, fica legível que a alteração do dado será com referência a entidade completa.

Exemplo: (/usuario/1234) :
Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}

O **PATCH** é usado para atualização parcial, quando você não quer mandar o payload completo.

Exemplo: (/usuario/1234) :
Resultado: {'name': 'João'}
