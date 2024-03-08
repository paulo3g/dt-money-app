export const dateFormatter = (date: Date) => date.toLocaleDateString('pt-BR')

export const priceFormatter = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
