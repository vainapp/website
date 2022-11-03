import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from '@mantine/core'
import {
  IconCoin,
  IconChartAreaLine,
  IconUsers,
  IconBuildingCommunity,
  IconCalendarEvent,
  IconNotification,
} from '@tabler/icons'

const mockdata = [
  {
    title: 'Visão geral',
    description:
      'Veja o que está acontecendo com sua empresa em um só lugar. Relatórios completos e detalhados.',
    icon: IconChartAreaLine,
  },
  {
    title: 'Gestão de funcionários',
    description:
      'Gerencie seus funcionários e suas funções. Crie e gerencie perfis de funcionários para que eles tenham a autonomia de gerenciar suas próprias agendas.',
    icon: IconUsers,
  },
  {
    title: 'Gestão de serviços e preços',
    description:
      'Gerencie seus serviços e preços. Crie e gerencie serviços e preços para que seus clientes possam agendar com facilidade.',
    icon: IconCoin,
  },
  {
    icon: IconBuildingCommunity,
    title: 'Gestão de franquias',
    description:
      'Seu negócio está crescendo? Ótimo! Crie uma franquia e passe a ter total controle sobre ela.',
  },
  {
    icon: IconCalendarEvent,
    title: 'Calendário e agendamentos',
    description: 'Calendário completo com agendamentos, tudo em um só lugar.',
  },
  {
    icon: IconNotification,
    title: 'Lembretes',
    description:
      'Seus clientes recebem lembretes para não esquecerem seus compromissos.',
  },
  // TODO - add more
]

const useStyles = createStyles((theme) => ({
  container: {
    paddingBottom: 120,

    '@media (max-width: 755px)': {
      paddingBottom: 80,
    },
  },

  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `1px solid ${theme.colors.gray[1]}`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}))

export default function Features() {
  const { classes, theme } = useStyles()
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ))

  return (
    <Container size="lg" pt="md" className={classes.container}>
      <Group position="center">
        <Badge variant="filled" size="lg">
          Melhores recursos
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        Use nossa tecnologia para melhorar sua empresa
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Não aguenta mais não ter controle sobre sua agenda? Não tem mais tempo
        para ficar fazendo planilhas? Foca no que importa e deixe a gente
        ajudar.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  )
}
