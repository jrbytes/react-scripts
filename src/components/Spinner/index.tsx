import { motion, Transition } from 'framer-motion'
import theme from '../../styles/theme'

const loadingDotStyle = {
  display: 'block',
  width: '2rem',
  height: '2rem',
  backgroundColor: theme.colors.foreground,
  borderRadius: '50%',
}

const container = {
  width: '10rem',
  height: '5rem',
  display: 'flex',
  justifyContent: 'space-around',
}

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const variants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '100%',
  },
}

const transition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: 'reverse',
} as Transition

export function Spinner() {
  return (
    <div
      style={{
        paddingTop: '5rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="loading"
    >
      <motion.div
        style={container}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={loadingDotStyle}
          variants={variants}
          transition={transition}
        />
        <motion.span
          style={loadingDotStyle}
          variants={variants}
          transition={transition}
        />
        <motion.span
          style={loadingDotStyle}
          variants={variants}
          transition={transition}
        />
      </motion.div>
    </div>
  )
}
