import { Paragraph } from './Paragraph'

export function AboutMe() {
  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-semibold text-zinc-800">Eduardo Tavares</h1>
      <Paragraph>
        Meu nome é Eduardo Tavares dos Santos, nasci em 2003 e sou de São Paulo
        - SP. Me interreso por assuntos relacionados a tecnologia desde os 9
        anos, quando ganhei o meu primeiro notebook. Desde então sempre fui
        muito curioso e comecei a aprender com pequenos tutoriais no YouTube e
        fui me apaixonando cada vez por mais tecnologia até começar a me
        interessar por desenvolvimento de software.
      </Paragraph>
      <Paragraph>
        Sou estudante de Sistemas de Informação na Universidade Virtual do
        Estado de São Paulo - UNIVESP e atualmente estou{' '}
        <strong>buscando a minha primeira oportunidade</strong> como
        Desenvolvedor Front-end. Neste meio tempo estou desenvolvendo alguns
        projetos pessoais para aprimorar os meus conhecimentos, além de estudar
        Node.Js e React Native para sempre expandir o meu leque de{' '}
        <strong>habilidades</strong> e me tornar Full Stack.
      </Paragraph>
      <Paragraph>
        Nas horas vagas gosto de programar, sempre tenho alguns cursos para
        fazer e aprender mais <strong>#LifelongLearning</strong>. E para
        descansar a mente geralmente escuto músicas, tenho preferência por Pop,
        mas ouço qualquer gênero 🤣, assisto à filmes e séries, normalmente de
        ação ou investigativas e adoro reunir os amigos para jogar online
        competitivamente 🎮.
      </Paragraph>
    </section>
  )
}
