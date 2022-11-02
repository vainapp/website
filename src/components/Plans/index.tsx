import {
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  createStyles,
  Group,
  List,
  SegmentedControl,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons'
import { useState } from 'react'
import Hero from './Hero'

type Intervals = 'month' | 'year'

export interface PlansProps {
  plans: {
    priceId: string
    amount: string
    product: {
      name: string
      description: string
      metadata: {
        highlight?: string
        allow_free_trial?: string
        features?: string
      }
    }
    interval: Intervals
  }[]
}

const useStyles = createStyles((theme) => ({
  cardHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardPriceTitle: {
    fontSize: 50,
    fontWeight: 300,
  },
  highlightedCard: {
    border: '2px solid transparent',
    background: `
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(to right, ${theme.colors.brandSecondary[6]}, ${theme.colors.brandInfo[6]}) border-box
    `,
  },
}))

export default function Plans({ plans }: PlansProps) {
  const [interval, setInterval] = useState<Intervals>('month')
  const { classes, theme } = useStyles()

  const plansOptions = plans
    .filter((item) => item.interval === interval)
    .map((item) => {
      const isHighlighted = item.product.metadata.highlight === 'true'
      const isFreeTrialAllowed =
        item.product.metadata.allow_free_trial === 'true'

      return (
        <Card
          key={item.priceId}
          shadow="md"
          radius="md"
          p="xs"
          withBorder
          className={isHighlighted && classes.highlightedCard}
        >
          <Card.Section inheritPadding py="xs">
            {isHighlighted ? (
              <Box className={classes.cardHeader}>
                <Badge
                  variant="gradient"
                  gradient={{ from: 'brandSecondary', to: 'brandInfo' }}
                  size="lg"
                >
                  Popular
                </Badge>
              </Box>
            ) : (
              <>&nbsp;</>
            )}
          </Card.Section>

          <Box px="lg" pb="lg">
            <Title order={2} weight={400}>
              {item.product.name}
            </Title>
            <Text color="dimmed" mb="xl">
              {item.product.description}
            </Text>

            <Group position="left" spacing="xs" align="baseline" mb="lg">
              <Title
                className={classes.cardPriceTitle}
                color={isFreeTrialAllowed ? 'dimmed' : undefined}
              >
                {isFreeTrialAllowed ? <del>{item.amount}</del> : item.amount}
              </Title>
              <Text color="dimmed" size="sm">
                por {item.interval === 'month' ? 'mês' : 'ano'}
              </Text>
            </Group>

            <Button fullWidth size="lg" mb="lg">
              {isFreeTrialAllowed
                ? 'Experimente grátis por 1 mês'
                : 'Assine agora'}
            </Button>

            <Text mb="sm">O plano {item.product.name} inclui:</Text>
            <List
              spacing="sm"
              size="md"
              center
              icon={<IconCheck color={theme.fn.primaryColor()} size={16} />}
            >
              {item.product.metadata.features?.split(',').map((feature) => (
                <List.Item key={feature}>{feature}</List.Item>
              ))}
            </List>
          </Box>
        </Card>
      )
    })

  return (
    <>
      <Hero />

      <Container size="lg">
        <Group position="center" my="xl">
          <SegmentedControl
            value={interval}
            onChange={(value: Intervals) => setInterval(value)}
            data={[
              {
                value: 'month',
                label: <Center>Mensal</Center>,
              },
              {
                value: 'year',
                label: (
                  <Center>
                    Anual&nbsp;<Badge>20% OFF</Badge>
                  </Center>
                ),
              },
            ]}
          />
        </Group>

        <SimpleGrid
          cols={3}
          spacing="xl"
          mt={50}
          breakpoints={[{ maxWidth: 'md', cols: 1 }]}
        >
          {plansOptions}
        </SimpleGrid>
      </Container>
    </>
  )
}
