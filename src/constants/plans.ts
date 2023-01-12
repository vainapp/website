interface Plan {
  name: string
  features: string[]
  monthly_price: {
    id: string
    value: string
  }
  yearly_price: {
    id: string
    value: string
  }
}

export const basicPlan: Plan = {
  name: 'Basic',
  features: [
    'Limite de 1 franquia',
    'Prioridade básica no ranking de pesquisa',
    'Relatórios básicos',
  ],
  monthly_price: {
    id: 'price_1M9WdvL35qcZeCtUhs785wxA',
    value: '20,00',
  },
  yearly_price: {
    id: 'price_1M9WdvL35qcZeCtUuyrtOJYb',
    value: '192,00',
  },
}

export const plusPlan: Plan = {
  name: 'Plus',
  features: [
    'Tudo do plano Basic',
    'Limite de 3 franquias',
    'Prioridade elevada no ranking de pesquisa',
    'Relatórios avançados',
  ],
  monthly_price: {
    id: 'price_1M9WfcL35qcZeCtUQyVUbDy5',
    value: '40,00',
  },
  yearly_price: {
    id: 'price_1M9WfcL35qcZeCtUcXIOVtED',
    value: '384,00',
  },
}

export const proPlan: Plan = {
  name: 'Pro',
  features: [
    'Tudo do plano Plus',
    'Franquias ilimitadas',
    'Prioridade máxima no ranking de pesquisas',
  ],
  monthly_price: {
    id: 'price_1M9WhUL35qcZeCtUo5Jz8ySL',
    value: '60,00',
  },
  yearly_price: {
    id: 'price_1M9WhUL35qcZeCtUkAVOEUPA',
    value: '576,00',
  },
}
