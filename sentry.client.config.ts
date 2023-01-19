import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://83f0646b496448bdb1433ea386a04374@o312013.ingest.sentry.io/4504528297852928',
  tracesSampleRate: 1.0,
})
