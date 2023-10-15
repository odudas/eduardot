export interface ParagraphProps {
  children: React.ReactNode
}

export function Paragraph({ children }: ParagraphProps) {
  return (
    <p className="text-justify text-sm text-zinc-800 lg:text-lg">{children}</p>
  )
}
