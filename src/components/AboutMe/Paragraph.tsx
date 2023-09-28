export interface ParagraphProps {
  children: React.ReactNode
}

export function Paragraph({ children }: ParagraphProps) {
  return <p className="text-justify text-lg text-zinc-800">{children}</p>
}
