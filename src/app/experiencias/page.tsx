import { Clipboard } from 'lucide-react'

export default function Experiences() {
  return (
    <>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center lg:mt-0">
        <div>
          <h3 className="text-xl font-bold text-zinc-700">
            Ainda não possuo nenhuma experiência profissional como dev
          </h3>
          <span className="font-medium text-zinc-500">
            Mas conto com você para me ajudar a conquistar este espaço e
            preencher esta página!
          </span>
        </div>

        <Clipboard className="h-44 w-36" strokeWidth={1} />
      </div>
    </>
  )
}
