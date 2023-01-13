import { createContext, ReactNode, useContext, useState } from 'react'

import { Plan } from '../constants/plans'

type Interval = 'monthly' | 'yearly'

interface CheckoutContextProps {
  children: ReactNode
}

interface CheckoutContextData {
  plan: Plan | null
  setPlan: (plan: Plan | null) => void
  intervalFilter: Interval
  setIntervalFilter: (interval: Interval) => void
}

const CheckoutContext = createContext({} as CheckoutContextData)

export function CheckoutProvider({
  children,
}: CheckoutContextProps): JSX.Element {
  const [plan, setPlan] = useState<Plan | null>(null)
  const [intervalFilter, setIntervalFilter] = useState<Interval>('monthly')

  return (
    <CheckoutContext.Provider
      value={{ plan, setPlan, intervalFilter, setIntervalFilter }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckout = (): CheckoutContextData =>
  useContext(CheckoutContext)
