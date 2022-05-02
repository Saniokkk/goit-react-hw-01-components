import PropTypes from 'prop-types';
import s from "./friend.module.css"

export const Friend = (props) => {
    const { avatar, name, isOnline } = props;
    return (
        <li className={s.item}>
            <span style={{backgroundColor: isOnline ? "green" : "red"}} className={s.status}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>   
    )
}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}