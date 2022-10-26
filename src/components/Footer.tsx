import {
  createStyles,
  Container,
  Group,
  Anchor,
  Image,
  Box,
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${theme.colors.gray[2]}`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}))

const links = [
  {
    link: '#',
    label: 'Contato',
  },
  {
    link: '#',
    label: 'Privacidade',
  },
]

export default function Footer() {
  const { classes } = useStyles()
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ))

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Box sx={{ maxWidth: 40 }}>
          <Image src="./logo.png" alt="Grupo C logo" />
        </Box>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  )
}
