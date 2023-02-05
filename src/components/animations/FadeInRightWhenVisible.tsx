import { motion } from 'framer-motion'

interface FadeInRightWhenVisibleProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const FadeInRightWhenVisible: React.FC<FadeInRightWhenVisibleProps> = ({
  children,
  className,
  delay = 0,
}: FadeInRightWhenVisibleProps) => {
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
        hidden: { x: -24, opacity: 0, transition },
      }}
    >
      {children}
    </motion.div>
  )
}
