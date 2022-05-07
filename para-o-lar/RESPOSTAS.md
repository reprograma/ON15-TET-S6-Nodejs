# Respostas
1) Qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?

Nível 2, verbos HTTP. 

2) Qual a relação entre os metodos HTTP e o CRUD?

O CRUD faz operações básicas e o HTTP interage com um sistema complexo, como o servidor por exemplo.

3) O que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?

HATEOAS é uma restrição que faz parte da arquitetura de aplicações REST, cujo objetivo é ajudar os clientes a consumirem o serviço sem a necessidade de conhecimento prévio profundo da API. Onde no caso do RESTfull Ao ser implementado, a API passa a fornecer links que indicarão aos clientes como navegar através dos seus recursos.

4) O que quer dizer quando dizemos que uma API é idempotente?

É quando pode ser chamado muitas vezes sem resultados diferentes. Não importa se o método é chamado apenas uma vez ou dez vezes. O resultado deve ser o mesmo.

5) Qual a diferença entre os métodos PUT e PATCH?

Os dois métodos (PUT e PATCH) são utilizados para solicitar requisição de alteração de dados, sendo que o PUT referencia que faz alteração completa dos dados, enquanto o PATCH altera apenas parcialmente.
