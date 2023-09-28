import { Paragraph } from './Paragraph'

export function AboutMe() {
  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-semibold text-zinc-800">Eduardo Tavares</h1>
      <Paragraph>
        Nasci em 2003, em São Paulo - SP e me interreso por assuntos
        relacionados a tecnologia desde os 9 anos, quando ganhei o meu primeiro
        notebook. Desde então sempre fui muito curioso e comecei a aprender com
        pequenos tutoriais no YouTube e fui me apaixonando cada vez mais até
        chegar onde estou hoje.
      </Paragraph>
      <Paragraph>
        Sou estudante de Sistemas de Informação na Universidade Virtual do
        Estado de São Paulo - UNIVESP e atualmente estou{' '}
        <strong>buscando a minha primeira oportunidade</strong> como
        Desenvolvedor Front-end. Neste meio tempo estou desenvolvendo alguns
        projetos pessoais, além de estudar back-end Node.Js para sempre expandir
        o meu leque de <strong>habilidades</strong> e me tornar Full Stack.
      </Paragraph>
      <Paragraph>
        Nas horas vagas gosto de programar, sempre tenho alguns cursos para
        fazer e aprender mais <strong>#LifelongLearning</strong>. E para
        descansar a mente geralmente escuto músicas, tenho preferência por Pop,
        mas ouço qualquer estilo 🤣, assisto à filmes e séries, normalmente de
        ação ou investigativas e adoro reunir os amigos jogar online
        competitivamente 🎮.
      </Paragraph>
    </section>
  )
}
