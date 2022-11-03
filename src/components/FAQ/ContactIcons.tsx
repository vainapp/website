import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { createStyles, ThemeIcon, Text, Box, Stack } from '@mantine/core'
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons'

type ContactIconVariant = 'white' | 'gradient'

interface ContactIconStyles {
  variant: ContactIconVariant
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'gradient'
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : 'none',
    backgroundColor: 'transparent',
  },

  title: {
    color:
      variant === 'gradient'
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === 'gradient' ? theme.black : theme.white,
  },
}))

interface ContactIconProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: FC<any>
  title: ReactNode
  description: ReactNode
  variant?: ContactIconVariant
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = 'gradient',
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant })
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === 'gradient' ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  )
}

interface ContactIconsListProps {
  data?: ContactIconProps[]
  variant?: ContactIconVariant
}

// TODO use right data
const MOCKDATA = [
  { title: 'E-mail', description: 'oi@grupoc.com.br', icon: IconAt },
  { title: 'Telefone', description: '+55 (11) 2222-2222', icon: IconPhone },
  {
    title: 'Endereço',
    description: 'Rua fictícia, São Paulo - SP',
    icon: IconMapPin,
  },
  {
    title: 'Horário comercial',
    description: '8:00 – 23:00',
    icon: IconSun,
  },
]

export default function ContactIconsList({
  data = MOCKDATA,
  variant,
}: ContactIconsListProps) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ))
  return <Stack>{items}</Stack>
}
