import Image from 'next/image'
import eduardoPhoto from '@/assets/profile.jpg'
import { TypewriterEffect } from './TypewriterEffect'

export function Profile() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={eduardoPhoto}
        alt="Foto do rosto do Eduardo Tavares. Um rapaz moreno, de barba e cabelos pretos e curtos, usando óculos de grau com armação prata, 2 brincos de argola em cada orelha e piercing de ferradura no septo"
        className="h-72 w-60 rounded-xl shadow-sm"
      />

      <strong className="mt-2 text-lg">Eduardo Tavares</strong>
      <TypewriterEffect />
    </div>
  )
}
