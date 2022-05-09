<!-- # Respostas
1) Qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?
Nível 2 Verbos HTTP da RMM - Richard Maturity Model.

2) Qual a relação entre os metodos HTTP e o CRUD?
REST é uma arquitetura de API robusta, CRUD é um ciclo para manter os registros atualizados e permanentes. O CRUD faz operações básicas e o HTTP interage com um sistema complexo, como o servidor por exemplo.

3) O que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?
Hypermedia As the Engine Of Application State é um modelo simples, com que uma API pode ser desenhada para que a mesma permita que aplicações que a consumam navegue entre seus recursos através de links e URLs sem a necessidade de conhecimento denso prévio sobre a API. Qualquer API que não utiliza HATEOAS não pode ser considerada RESTful.

4) O que quer dizer quando dizemos que uma API é indepotente?
A idempotência garante que uma solicitação de API seja concluída apenas uma vez, o endpoint pode ser chamado várias vezes sem resultados diferentes. Não importa se o método é chamado apenas uma ou dez vezes. O resultado deve sempre o mesmo. Isso se aplica apenas ao resultado, não ao próprio recurso.

5) Qual a diferença entre os métodos PUT e PATCH? 
O PUT substitui todos os atuais dados do recurso de destino pelos dados passados na requisição, trata-se de uma atualização integral. O PATCH aplica modificações parciais em um recurso. 
-->