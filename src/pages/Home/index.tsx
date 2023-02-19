import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as S from './styles'

export function Home() {
  const [loadImage, setLoadImage] = useState(false)

  useEffect(() => {
    const background = new Image()
    background.src = S.LoadImageCss
    background.onload = () => {
      setLoadImage(true)
    }
  }, [])

  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 0.9 },
  }

  return (
    <S.Wrapper>
      <motion.div
        initial="hidden"
        animate={loadImage ? 'visible' : 'hidden'}
        variants={variants}
      >
        <aside>React Tips</aside>
        <main>Hello World</main>
      </motion.div>
    </S.Wrapper>
  )
}
