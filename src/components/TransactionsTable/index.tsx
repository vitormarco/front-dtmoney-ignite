import { useEffect } from "react";
import { fetchAllTransaction } from "../../service/Transactions";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    async function getTransactions() {
      const data = await fetchAllTransaction()
      console.log(data)
    }

    getTransactions()
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">R$12000</td>
            <td>Development</td>
            <td>2022/01/01</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">-R$1200</td>
            <td>House</td>
            <td>2022/01/17</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}