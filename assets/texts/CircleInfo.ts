export type CircleItem = {
  image: string
  description: string
  type: 'top' | 'bottom' | 'left' | 'right'
}

export const CircleInfo: CircleItem[] = [
  {
    image: require('../images/circle1.png'),
    description: 'Сколиоз',
    type: 'top',
  },
  {
    image: require('../images/circle2.png'),
    description: 'Утомляемость',
    type: 'left',
  },
  {
    image: require('../images/circle3.png'),
    description: 'Вывих бедра',
    type: 'left',
  },
  {
    image: require('../images/circle4.png'),
    description: 'Контрактура суставов',
    type: 'left',
  },
  {
    image: require('../images/circle5.png'),
    description: 'Неспособность бегать, изменение походки',
    type: 'bottom',
  },
  {
    image: require('../images/circle6.png'),
    description: 'Дыхательная недостаточность/ респираторная дисфункция',
    type: 'right',
  },
  {
    image: require('../images/circle7.png'),
    description: 'Нарушения жевания и глотания',
    type: 'right',
  },
  {
    image: require('../images/circle8.png'),
    description: 'Ограниченная способность поднимать руки и переносить предметы',
    type: 'right',
  },
]
