# Respostas
*1) Qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?*

Nível 2, verbos HTTP. É o nível de maturidade mais eficiente, o HTTP deixa de exercer um papel apenas de transporte e passa a exercer um papel semântico na API, ou seja, seus verbos passam a ser utilizados com o propósito no qual foram criados.

*2) Qual a relação entre os metodos HTTP e o CRUD?*

Permitem a modelagem e interação com os recursos presentes em uma API.

*3) O que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?*

A teoria diz que para uma API ser RESTFul deve implementar todos os padrões REST. Que inclui o HATEOAS. A web funciona com HATEOAS, basta entrar em um site e ali estará todos os links que você vai navegar. Porém no contexto de API, ainda parece impraticável. Pode ser que mude minha opinião no futuro.

*4) O que quer dizer quando dizemos que uma API é idempotente?*

O endpoint pode ser chamado várias vezes sem resultados diferentes. Não importa se o método é chamado apenas uma ou dez vezes. O resultado deve sempre o mesmo. Isso se aplica apenas ao resultado, não ao próprio recurso.

*5) Qual a diferença entre os métodos PUT e PATCH?*

PUT: Requisita que um entidade seja armazenada embaixo da URI fornecida. Se a URI se refere a um recurso que já existe, ele é modificado; se a URI não aponta para um recurso existente, então o servidor pode criar o recurso com essa URI.
* exemplo: (/usuario/1234) :
Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}

PATCH: Usado para aplicar modificações parciais a um recurso.
* exemplo: (/usuario/1234) :

Resultado: {'name': 'João'}

> Referências:
> 
> * https://www.brunobrito.net.br/api-restful-boas-praticas/
> 
> * https://gist.github.com/renatoapcosta/8882e63760f7eeac469e1e162377fa30
> 
> * https://www.brunobrito.net.br/richardson-maturity-model/
> 
> * https://pt.stackoverflow.com/questions/9419/quais-s%c3%a3o-os-m%c3%a9todos-de-requisi%c3%a7%c3%a3o-http-e-qual-%c3%a9-a-diferen%c3%a7a-entre-eles
