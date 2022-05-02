import s from "./statistics.module.css";
import PropTypes from 'prop-types';

export const StatisticsItem = (props) => {
    const { id, label, percentage } = props;
    const color = getRandomHexColor();
    return ( 
        <li key={id} style={{backgroundColor: `${color}`}} className={s.item}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{`${percentage}%`}</span>
        </li>
    )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatisticsItem.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}


