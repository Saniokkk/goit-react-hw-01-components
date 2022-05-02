import PropTypes from 'prop-types';
import s from "./transaction.module.css";


export const Transaction = ( props ) => {

    const { type, amount, currency } = props;
    return (
        <tr className={s.row}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}