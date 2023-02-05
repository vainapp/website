import { motion } from 'framer-motion'

interface FadeInWhenVisibleProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  className,
  delay = 0,
}: FadeInWhenVisibleProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}
