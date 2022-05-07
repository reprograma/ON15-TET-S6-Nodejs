# Respostas
1) Tendo em vista que as APIs são categorizadas como níveis de maturidade de 0 a 3 (crescentes em nível de organização), o CRUD corresponde ao nível 2.

2) A relação se dá pelo fato de que as operações CRUD (create, read, update e delete) são executadas por meio de requests HTTP (post, get, put, patch e delete). 
(Tive muita dificuldade de montar essa resposta, parecia que os conceitos embolaram na minha cabeça. Entendi bem o que é um e o que é outro, mas pra explicar a correspondência entre eles foi complexo)

3) HATEOAS é Hypermedia as the enthine of application state. Dadas as aplicações RESTfull (ou REST), o HATEOAS é uma especificação da sua arquitetura, ou seja, as diferencia de outras "arquiteturas de aplicação". Dessa forma, é obrigatório para a API ser considerada RESTfull

4) (achei na internet mas não consegui assimilar para colocar nas minhas palavras) 

5) O Put e Patch se diferem no que diz respeito ao alcance de cada um: o Put consegue realizar mudanças completas em um documento, enquanto o Patch é restrito a mudanças parciais.