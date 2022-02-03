import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { numberToMoneySign } from '../../helpers/format';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <span>Income</span>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>
          {numberToMoneySign({ value: summary.deposits })}
        </strong>
      </div>
      <div>
        <header>
          <span>outcome</span>
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>
          - {numberToMoneySign({ value: summary.withdraws })}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <span>Total</span>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {numberToMoneySign({ value: summary.total })}</strong>
      </div>
    </Container>
  )
}