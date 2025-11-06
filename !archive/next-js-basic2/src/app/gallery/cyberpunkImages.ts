import { StaticImageData } from 'next/image' // Імпортуємо тип StaticImageData з пакета next/image, що використовується для типізації зображень.
import image01 from '/public/images/01.jpg'
import image02 from '/public/images/02.jpg'
import image03 from '/public/images/03.jpg'
import image04 from '/public/images/04.jpg'
import image05 from '/public/images/05.jpg'
import image06 from '/public/images/06.jpg'
import image07 from '/public/images/07.jpg'
import image08 from '/public/images/08.jpg'
import image09 from '/public/images/09.jpg'
import image10 from '/public/images/10.jpg'
import image11 from '/public/images/11.jpg'
import image12 from '/public/images/12.jpg'

// Визначаємо тип CyberpunkImage для управління структурою даних кожного зображення.
export type CyberpunkImage = {
  id: string
  title: string
  src: StaticImageData
}

export const cyberpunkImages: CyberpunkImage[] = [
  {
    id: '1',
    title: 'Cyberpunk 1',
    src: image01
  },
  {
    id: '2',
    title: 'Cyberpunk 2',
    src: image02
  },
  {
    id: '3',
    title: 'Cyberpunk 3',
    src: image03
  },
  {
    id: '4',
    title: 'Cyberpunk 4',
    src: image04
  },
  {
    id: '5',
    title: 'Cyberpunk 5',
    src: image05
  },
  {
    id: '6',
    title: 'Cyberpunk 6',
    src: image06
  },
  {
    id: '7',
    title: 'Cyberpunk 7',
    src: image07
  },
  {
    id: '8',
    title: 'Cyberpunk 8',
    src: image08
  },
  {
    id: '9',
    title: 'Cyberpunk 9',
    src: image09
  },
  {
    id: '10',
    title: 'Cyberpunk 10',
    src: image10
  },
  {
    id: '11',
    title: 'Cyberpunk 11',
    src: image11
  },
  {
    id: '12',
    title: 'Cyberpunk 12',
    src: image12
  }
]
