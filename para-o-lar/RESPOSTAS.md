# Respostas
**1) Qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?**
Nível 2, two services.

**2) Qual a relação entre os metodos HTTP e o CRUD?**
O HTTP deixa de exercer um papel apenas de transporte e passa a exercer um papel semântico na API, ou seja, seus verbos passam a ser utilizados com o propósito no qual foram criados. A utilização do métodos mais conhecidos GET, POST, PUT e DELETE (ou CRUD) , bem como a tratativa correta dos códigos de resposta, permitem a modelagem e interação com os recursos presentes em uma API.

**3) O que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?**
Hypermedia as the Engine of Application State, ele tem como elemento principal uma representação hypermedia, que permite um documento descrever seu estado atual e quais os seus relacionamentos com outros futuros estados, assim a API alcança o nível 3 de maturidade. A teoria diz que para uma API ser RESTFul deve implementar todos os padrões REST. Que inclui o HATEOAS. A web funciona com HATEOAS, basta entrar em um site e ali estará todos os links que você vai navegar. Porém no contexto de API, ainda parece impraticável.

**4) O que quer dizer quando dizemos que uma API é idempotente?**
Idempotente significa que o endpoint pode ser chamado várias vezes sem resultados diferentes. Não importa se o método é chamado apenas uma ou dez vezes. O resultado deve sempre o mesmo. Isso se aplica apenas ao resultado, não ao próprio recurso.

**5) Qual a diferença entre os métodos PUT e PATCH?**
São métodos HTTP PUT e PATCH são usados para indicar um requisição de alteração de dados. Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa.

Exemplo: (/usuario/1234) :

Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}

O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo.

Exemplo: (/usuario/1234) :

Resultado: {'name': 'João'}

>Referências:
> * https://www.brunobrito.net.br/richardson-maturity-model/
> * https://gist.github.com/renatoapcosta/8882e63760f7eeac469e1e162377fa30
> * https://www.programmers.com.br/blog/niveis-de-maturidade-de-uma-api-rest/
> * https://www.brunobrito.net.br/api-restful-boas-praticas/
> * https://pt.stackoverflow.com/questions/217894/qual-%C3%A9-a-diferen%C3%A7a-entre-o-m%C3%A9todo-put-e-o-patch#:~:text=Em%20poucas%20palavras%2C%20os%20m%C3%A9todos,com%20refer%C3%AAncia%20a%20entidade%20completa.&text=O%20PATCH%20%C3%A9%20usado%20para,quer%20mandar%20o%20payload%20completo.
