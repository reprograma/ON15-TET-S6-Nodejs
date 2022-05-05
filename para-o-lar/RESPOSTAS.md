# Respostas
1 - Alguns verbos do CRUD aparecem em todos os níveis de maturidade de Richardson, mas a partir do nível 02 a API suporta todos eles e são utilizados da forma correta;
2 - CRUD são os verbos do HTTP;
3 - HATEOAS (Hypermdedia as the Engine of Application State) são controles de hipermídia que tem por objetivo nos dizer o que podemos fazer a seguir e a URI que precisamos manipular para fazê-lo, ou seja, é uma API que fornece links ao seus clientes que indicarão como fazer a navegação entres seus recursos. Uma API que possui controles de hipermídia é considerada Rest/Restful, encontrado no nível 03 de maturidade.
4 - Uma API é idempotente quando uma requisição identica pode ser executada inúmeras vezes sem alterar o estado do servidor, sem interferir em seu resultado;
5 - Os dois métodos (PUT e PATCH) são utilizados para solicitar requisição de alteração de dados, sendo que o PUT referencia que faz alteração completa dos dados, enquanto o PATCH altera apenas parcialmente.


