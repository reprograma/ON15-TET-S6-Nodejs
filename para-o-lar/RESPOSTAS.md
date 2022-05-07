# Respostas

1) qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?

Relacionado ao nível de maturidade 2, verbos HTTP.

2) qual a relação entre os metodos HTTP e o CRUD?

A relação é que os verbos HTTP parecem estar diretamente ligado com o CRUD, permitindo uma interação a partir dos recursos de uma API "Application Programming Interface".

3) o que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?

HATEOAS faz parte da arquitetura REST, e tem como finalidade de que os clientes possam utilizar uma API sem que sejam familiarizados. A partir de Richardson, o HATEOAS é o último nível de uma API RESTful.

4) O que quer dizer quando dizemos que uma API é indepotente?

Uma API é idempotente corresponde quando a uma requisição idêntica que pode vir a ser repetida sem mudança no estado do servidor.

5) Qual a diferença entre os métodos PUT e PATCH?

O PATCH pode realizar modificações parciais a um determinado recurso, enquanto o PUT está relazionado a substituições completas. O PATCH não é idempotente, logo requisições idênticas podem trazer resultados idênticos.
