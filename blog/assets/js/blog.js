const contentEl = document.querySelector('main#content')
const menuEl = document.querySelector("aside#menu")
const menuButtonEl = document.querySelector("#header .menu-button")


const posts = [
    {
        id: "1",
        title: "IA: o quê é?",
        content: `<p>
            IA significa Inteligência Artificial, que é o campo da ciência da
            computação focado na criação de sistemas capazes de realizar tarefas
            que normalmente exigiriam inteligência humana. Essas tarefas incluem
            aprendizado, raciocínio, percepção, tomada de decisão e até
            criatividade.
          </p>
          <h3>Como funciona a IA?</h3>
          <p>
            IA funciona com base em algoritmos que processam grandes quantidades
            de dados para identificar padrões e tomar decisões ou realizar
            ações. Existem várias abordagens e tipos de IA, mas as principais
            incluem:
          </p>
          <ol>
            <li>
              IA baseada em regras (Sistemas Especialistas): Segue um conjunto
              de regras predefinidas para tomar decisões. Exemplo: sistemas de
              diagnóstico médico simples.
            </li>
            <li>
              Machine Learning (Aprendizado de Máquina): Ensina computadores a
              aprender a partir de dados, sem programação explícita para cada
              tarefa. Exemplos incluem:
            </li>
            <ul>
              <li>
                Aprendizado supervisionado: O sistema é treinado com dados
                rotulados.
              </li>
              <li>
                Aprendizado não supervisionado: O sistema identifica padrões em
                dados não rotulados.
              </li>
              <li>
                Aprendizado por reforço: O sistema aprende por tentativa e erro,
                recebendo recompensas ou punições.
              </li>
            </ul>
            <li>
              Deep Learning (Aprendizado Profundo): Um subcampo do aprendizado
              de máquina que usa redes neurais artificiais inspiradas no cérebro
              humano para processar dados complexos, como imagens ou linguagem
              natural.
            </li>
            <li>
              IA Generativa: Cria novos conteúdos, como textos, imagens ou
              músicas, com base em padrões aprendidos. Exemplos: ChatGPT e
              DALL-E.
            </li>
          </ol>

          <h3>Tipos de Inteligência Artificial:</h3>
          <ul>
            <li>
              IA Fraca (Narrow AI): Projetada para executar tarefas específicas.
              Exemplos: assistentes virtuais, sistemas de recomendação,
              reconhecimento de voz e imagem.
            </li>
            <li>
              IA Forte (General AI): Uma IA hipotética capaz de realizar
              qualquer tarefa cognitiva que um ser humano possa realizar. Ainda
              não existe.
            </li>
            <li>
              Superinteligência Artificial: Um conceito futurista de IA que
              ultrapassaria a inteligência humana em todos os aspectos. É tema
              de debates éticos e de ficção científica.
            </li>
          </ul>
          <h3>Exemplos de aplicações da IA:</h3>
          <ul>
            <li>Assistentes virtuais: Alexa, Siri, Google Assistant.</li>
            <li>
              Reconhecimento de imagens: Ferramentas que identificam rostos ou
              objetos em fotos.
            </li>
            <li>Veículos autônomos: Carros que dirigem sozinhos.</li>
            <li>
              Medicina: Diagnóstico de doenças, análise de exames e
              personalização de tratamentos.
            </li>
            <li>Finanças: Detecção de fraudes e análises de mercado.</li>
            <li>
              Entretenimento: Sistemas de recomendação em plataformas como
              Netflix e Spotify.
            </li>
          </ul>
          <h3>Benefícios e desafios da IA:</h3>
          <ul>
            <li>Benefícios:</li>
            <ul>
              <li>Automação de tarefas repetitivas.</li>
              <li>Aumento da eficiência e precisão.</li>
              <li>Possibilidades de inovação em diversos setores.</li>
            </ul>
            <li>Desafios:</li>
            <ul>
              <li>Preocupações éticas (uso indevido, viés em algoritmos).</li>
              <li>Impacto no mercado de trabalho.</li>
              <li>Privacidade e segurança de dados.</li>
            </ul>
          </ul>
          <p>
            A IA está cada vez mais presente no dia a dia, moldando a forma como
            vivemos, trabalhamos e nos comunicamos.
          </p>`
    },
    {
        id: "2",
        title: "Rede de Computadores",
        content: `<figure>
            <img
              src="./assets/img/rede.webp"
              alt="Imagem que representa uma rede de computadores, com um globo em azul ligado por cabos em vários laptops, em aluzão a conexão global da internet."
            />
            <figcaption>
              Rede de Computadores interligadas mundialmente
            </figcaption>
          </figure>
          <p>
            Uma rede de computadores é um conjunto de dispositivos
            interconectados que compartilham informações e recursos. Esses
            dispositivos podem incluir computadores, servidores, smartphones,
            tablets, impressoras e outros equipamentos eletrônicos. A conexão
            entre os dispositivos é feita por meio de meios físicos, como cabos,
            ou sem fio, como Wi-Fi ou Bluetooth.
          </p>
          <h3>Componentes principais de uma rede:</h3>
          <ol>
            <li>
              Dispositivos finais: Computadores, celulares, tablets e outros
              equipamentos que utilizam a rede.
            </li>
            <li>
              Dispositivos intermediários: Roteadores, switches e hubs, que
              ajudam a direcionar os dados entre dispositivos.
            </li>
            <li>
              Meios de transmissão: Os caminhos físicos ou sem fio pelos quais
              os dados viajam, como cabos de rede (Ethernet), fibras ópticas ou
              ondas de rádio.
            </li>
            <li>
              Protocolos: Conjuntos de regras que determinam como os dados são
              transmitidos e interpretados. Exemplos: TCP/IP, HTTP, FTP.
            </li>
          </ol>

          <h3>Tipos de redes:</h3>
          <ol>
            <li>
              LAN (Local Area Network): Rede local, geralmente usada em
              ambientes pequenos, como residências, escolas ou escritórios.
            </li>
            <li>
              WAN (Wide Area Network): Rede ampla, que conecta dispositivos em
              locais geograficamente distantes. A internet é a maior WAN.
            </li>
            <li>
              MAN (Metropolitan Area Network): Rede que cobre uma área maior que
              uma LAN, mas menor que uma WAN, como uma cidade ou campus.
            </li>
            <li>
              PAN (Personal Area Network): Rede de curta distância, geralmente
              para uso pessoal, como a conexão entre um smartphone e um
              smartwatch.
            </li>
            <li>
              VPN (Virtual Private Network): Rede virtual usada para criar uma
              conexão segura através de outra rede, como a internet.
            </li>
          </ol>
          <h3>Benefícios de uma rede de computadores:</h3>
          <ul>
            <li>
              Compartilhamento de recursos: Impressoras, arquivos e conexão com
              a internet podem ser acessados por vários dispositivos.
            </li>
            <li>
              Comunicação eficiente: Mensagens, chamadas e videoconferências
              podem ser realizadas facilmente.
            </li>
            <li>
              Centralização e controle: Empresas podem gerenciar dados e
              recursos de forma centralizada.
            </li>
            <li>
              Colaboração: Permite que várias pessoas trabalhem juntas em
              projetos de maneira eficiente.
            </li>
          </ul>

          <p>
            Essencialmente, uma rede de computadores é o que conecta o mundo
            digital, permitindo trocas de dados rápidas e eficientes.
          </p>`
    },
    {
        id: "3",
        title: "O que é o HTML",
        content: `<p>
            HTML (HyperText Markup Language) é uma linguagem de marcação usada
            para criar a estrutura básica e o conteúdo de páginas da web. Ele é
            a espinha dorsal de qualquer site, sendo responsável por organizar
            textos, imagens, links e outros elementos visuais.
          </p>
          <h3>Como funciona o HTML?</h3>
          <p>
            O HTML utiliza tags (ou marcas) para definir os elementos da página.
            Cada tag tem uma função específica e geralmente vem em pares: uma de
            abertura e outra de fechamento. As tags são envolvidas por sinais de
            menor e maior (&lt; &gt;).
          </p>
          <p>Por exemplo:</p>
          <pre>&lt;p&gt;Este é um parágrafo.&lt;/p&gt;</pre>
          <ul>
            <li><span class="badge">&lt;p&gt;</span>: Tag de abertura</li>
            <li><span class="badge">&lt;/p&gt;</span>: Tag de fechamento</li>
            <li>O texto entre as tags é o conteúdo do parágrafo.</li>
          </ul>
          <h3>Estrutura básica de um documento HTML</h3>
          <p>
            Todo documento HTML segue uma estrutura básica, como no exemplo
            abaixo:
          </p>
          <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Minha Página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Bem-vindo ao HTML&lt;/h1&gt;
    &lt;p&gt;Este é um exemplo básico.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre
          >
          <h3>Componentes dessa estrutura:</h3>
          <ol>
            <li>
              <span class="badge">&lt;!DOCTYPE html&gt;</span>: Informa ao
              navegador que o documento está usando a versão mais recente do
              HTML (HTML5).
            </li>
            <li>
              <span class="badge">&lt;html&gt;</span>: A tag raiz que contém
              todo o conteúdo da página.
            </li>
            <li>
              <span class="badge">&lt;head&gt;</span>: Contém informações sobre
              o documento, como título, meta informações e links para estilos ou
              scripts.
            </li>
            <li>
              <span class="badge">&lt;title&gt;</span>: Define o título da
              página exibido na aba do navegador.
            </li>
            <li>
              <span class="badge">&lt;body&gt;</span>: Contém o conteúdo visível
              da página, como textos, imagens e links.
            </li>
          </ol>

          <h3>Benefícios do HTML:</h3>
          <ul>
            <li>Simples e fácil de aprender: Ideal para iniciantes.</li>
            <li>
              Base para desenvolvimento web: Essencial para criar sites e
              aplicações web.
            </li>
            <li>
              Compatibilidade universal: Funciona em todos os navegadores
              modernos.
            </li>
          </ul>
          <h3>Limitações:</h3>
          <p>
            O HTML não é uma linguagem de programação, ou seja, não realiza
            lógica ou cálculos. Ele apenas define a estrutura. Para adicionar
            estilo ou interatividade, é necessário usar CSS (para estilização) e
            JavaScript (para comportamento dinâmico).
          </p>`
    },
    {
        id: "4",
        title: "CSS na Prática",
        content: `<p>
            CSS (Cascading Style Sheets) é uma linguagem usada para estilizar
            páginas da web criadas com HTML. Com o CSS, você pode controlar
            cores, fontes, tamanhos, espaçamentos, layouts e muito mais,
            tornando o site visualmente atraente.
          </p>
          <h3>Como funciona?</h3>
          <p>
            O CSS é aplicado aos elementos HTML através de seletores, que
            indicam quais partes da página devem ser estilizadas, e
            propriedades, que definem os estilos.
          </p>
          <p>Exemplo básico:</p>
          <pre>&lt;p class="texto"&gt;Olá, mundo!&lt;/p&gt;</pre>
          <pre>
.texto { 
  color: blue; 
  font-size: 20px; 
}</pre
          >
          <h3>Principais propriedades:</h3>
          <ul>
            <li>Cores e fontes:</li>
            <ul>
              <li><span class="badge">color</span>: Cor do texto.</li>
              <li>
                <span class="badge">background-color</span>: Cor de fundo.
              </li>
              <li><span class="badge">font-size</span>: Tamanho da fonte.</li>
              <li><span class="badge">font-family</span>: Tipo da fonte.</li>
            </ul>
            <li>Espaçamento:</li>
            <ul>
              <li>
                <span class="badge">margin</span>: Espaço externo (fora do
                elemento).
              </li>
              <li>
                <span class="badge">padding</span>: Espaço interno (dentro do
                elemento).
              </li>
            </ul>
            <li>Posicionamento e layout:</li>
            <ul>
              <li>
                <span class="badge">display</span>: Define como o elemento é
                exibido (ex.: block, inline, flex).
              </li>
              <li>
                <span class="badge">position</span>: Define a posição (ex.:
                relative, absolute).
              </li>
              <li>
                <span class="badge">width e height</span>: Largura e altura.
              </li>
            </ul>
          </ul>

          <p>
            Com o CSS, você transforma páginas simples em designs únicos e
            agradáveis!
          </p>`
    }
]

function addPost(post){
    const articleEl = document.createElement("article")
    const headerEl = document.createElement("header")
    const titleEl = document.createElement("h2")
    const postContentEl = document.createElement("section")

    articleEl.classList.add("post")
    articleEl.setAttribute("data-post", post.id)
    titleEl.innerHTML = post.title
    headerEl.classList.add("header")
    postContentEl.classList.add("post-content")
    postContentEl.innerHTML = post.content


    headerEl.appendChild(titleEl)
    articleEl.appendChild(headerEl)
    articleEl.appendChild(postContentEl)
    contentEl.appendChild(articleEl)

}

posts.forEach(addPost);


menuButtonEl.onclick = () => {
    const active = menuEl.classList.toggle("active")
    if(active)
        menuButtonEl.classList.toggle("active")
    else
        menuButtonEl.classList.toggle("active")
}
