import { useEffect } from 'react';
import { api } from '../../services/api';
import * as S from './styles';

function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions')
      .then((reponse) => console.log(reponse.data))
  },[])

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>18/05/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1.100</td>
            <td>Casa</td>
            <td>18/05/2022</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  )
}

export { TransactionsTable };