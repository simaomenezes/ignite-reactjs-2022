import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
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
                        <td>
                            Desenvolvimento mobile
                        </td>
                        <td className="deposit">
                            R$1200.00
                        </td>
                        <td>
                            Desenvolvimento
                        </td>
                        <td>
                            20/20/2022
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Arrendamento
                        </td>
                        <td className="withdraw">
                            -R$350.00
                        </td>
                        <td>
                            Casa
                        </td>
                        <td>
                            20/20/2022
                        </td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}