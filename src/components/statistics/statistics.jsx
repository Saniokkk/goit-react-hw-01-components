import { StatisticsItem } from "./statisticsItem";
import s from"./statistics.module.css";
import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {  
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>{title}</h2>
            <ul className={s.statList}>
                {stats.map(({id,label,percentage})=>(<StatisticsItem key={id} label={label} percentage={percentage} />))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.array.isRequired,
}

