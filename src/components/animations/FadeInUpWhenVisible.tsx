import { motion } from 'framer-motion'

interface FadeInUpWhenVisibleProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const FadeInUpWhenVisible: React.FC<FadeInUpWhenVisibleProps> = ({
  children,
  className,
  delay = 0,
}: FadeInUpWhenVisibleProps) => {
  const transition = { duration: 0.4, delay, ease: [0.42, 0, 0.58, 1] }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={transition}
      variants={{
        visible: { y: 0, x: 0, opacity: 1, transition },
        hidden: { y: 24, opacity: 0, transition },
      }}
    >
      {children}
    </motion.div>
  )
}
