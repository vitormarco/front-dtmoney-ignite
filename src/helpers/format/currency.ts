
type numberToMoneySignType = {
  region?: string;
  value: number;
  currency?: string;
}

export function numberToMoneySign({ region = 'pt-BR', value, currency = 'BRL' }: numberToMoneySignType): string {
  return new Intl.NumberFormat(region, {
    style: 'currency',
    currency: currency
    
  }).format(value)
}