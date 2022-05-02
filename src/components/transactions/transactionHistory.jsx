import PropTypes from 'prop-types';
import { Transaction } from "./transaction";
import s from "./transactionHistory.module.css";


export const TransactionHistory = ({ data }) => {
    return (
        <section>
            <table className={s.transactionHistory}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(({ id, type, amount, currency }) => <Transaction
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />)}
                </tbody>
                </table>
            </section>
    )
}

TransactionHistory.propTypes = {
    data: PropTypes.array.isRequired
}