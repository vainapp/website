import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Container,
} from '@mantine/core'
import image from '../images/newsletter.svg'

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.xl * 2,
    paddingTop: 120,
    paddingBottom: 120,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
      paddingTop: 80,
      paddingBottom: 80,
    },
  },

  image: {
    maxWidth: '40%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '70%',
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.black,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}))

// TODO implement the newsletter subscription

export default function Newsletter() {
  const { classes } = useStyles()

  return (
    <Container size="lg" className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Pera aí...</Title>
        <Text weight={500} size="lg" mb={5}>
          Se inscreva na nossa lista de e-mails!
        </Text>
        <Text size="sm" color="dimmed">
          Você nunca vai perder uma atualização sobre o nosso produto e notícias
          importantes para você.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Seu e-mail"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Increver-se</Button>
        </div>
      </div>
      <Image
        src={image.src}
        className={classes.image}
        alt="Envelope de e-mail"
      />
    </Container>
  )
}
