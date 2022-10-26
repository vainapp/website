import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Image,
  Container,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconCoin,
  IconChevronDown,
  IconChartAreaLine,
  IconUsers,
  IconBuildingCommunity,
  IconCalendarEvent,
  IconNotification,
} from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colors.gray[1]}`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  container: {
    height: '100%',
  },
}))

const mockdata = [
  {
    icon: IconChartAreaLine,
    title: 'Visão geral',
    description:
      'Visualize relatórios completos sobre o desempenho de seu comércio.',
  },
  {
    icon: IconUsers,
    title: 'Gestão de funcionários',
    description: 'Gerencie seus funcionários e suas funções.',
  },
  {
    icon: IconCoin,
    title: 'Gestão de serviços e preços',
    description: 'Gerencie seus serviços e preços.',
  },
  {
    icon: IconBuildingCommunity,
    title: 'Gestão de franquias',
    description: 'Gerencie suas franquias e seus funcionários.',
  },
  {
    icon: IconCalendarEvent,
    title: 'Calendário e agendamentos',
    description: 'Calendário completo com agendamentos.',
  },
  {
    icon: IconNotification,
    title: 'Lembretes',
    description: 'Lembretes de compromissos.',
  },
]

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const { classes, theme } = useStyles()

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  return (
    <Box>
      <Header height={80} px="md">
        <Container className={classes.container}>
          <Group position="apart" sx={{ height: '100%' }}>
            <Box sx={{ maxWidth: 40 }}>
              <Image src="./logo.png" alt="Grupo C logo" />
            </Box>

            <Group
              sx={{ height: '100%' }}
              spacing={0}
              className={classes.hiddenMobile}
            >
              <a href="#" className={classes.link}>
                Início
              </a>
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Recursos
                      </Box>
                      <IconChevronDown
                        size={16}
                        color={theme.fn.primaryColor()}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                  <Group position="apart" px="md">
                    <Text weight={500}>Recursos</Text>
                    <Anchor href="#" size="xs">
                      Ver todos
                    </Anchor>
                  </Group>

                  <Divider my="sm" mx="-md" color="gray.1" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group position="apart">
                      <div>
                        <Text weight={500} size="sm">
                          Comece já!
                        </Text>
                        <Text size="xs" color="dimmed">
                          Leve seu comércio para o próximo nível
                        </Text>
                      </div>
                      <Button variant="default">Criar uma conta</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="#" className={classes.link}>
                Planos
              </a>
              <a href="#" className={classes.link}>
                Aplicativo
              </a>
              <a href="#" className={classes.link}>
                Perguntas frequentes
              </a>
              <a href="#" className={classes.link}>
                Contato
              </a>
            </Group>

            <Group className={classes.hiddenMobile}>
              <Button>Criar uma conta</Button>
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.hiddenDesktop}
            />
          </Group>
        </Container>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navegação"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color="gray.1" />

          <a href="#" className={classes.link}>
            Início
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Recursos
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Planos
          </a>
          <a href="#" className={classes.link}>
            Aplicativo
          </a>
          <a href="#" className={classes.link}>
            Perguntas frequentes
          </a>
          <a href="#" className={classes.link}>
            Contato
          </a>

          <Divider my="sm" color="gray.1" />

          <Group position="center" grow pb="xl" px="md">
            <Button>Criar uma conta</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
