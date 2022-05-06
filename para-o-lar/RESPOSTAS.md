# Respostas
1) Qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?*

Nível 2, verbos HTTP. 

2) Qual a relação entre os metodos HTTP e o CRUD?*

Permitem a modelagem e interação com os recursos presentes em uma API.

3) O que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?*

 HATEOAS (Hypermdedia as the Engine of Application State) são controles de hipermídia que tem por objetivo nos dizer o que podemos fazer a seguir e a URI que precisamos manipular para fazê-lo, ou seja, é uma API que fornece links ao seus clientes que indicarão como fazer a navegação entres seus recursos. Uma API que possui controles de hipermídia é considerada Rest/Restful, encontrado no nível 03 de maturidade.


4) O que quer dizer quando dizemos que uma API é idempotente?*

Uma API é idempotente quando uma requisição identica pode ser executada inúmeras vezes sem alterar o estado do servidor, sem interferir em seu resultado;

5) Qual a diferença entre os métodos PUT e PATCH?*

Os dois métodos (PUT e PATCH) são utilizados para solicitar requisição de alteração de dados, sendo que o PUT referencia que faz alteração completa dos dados, enquanto o PATCH altera apenas parcialmente.

