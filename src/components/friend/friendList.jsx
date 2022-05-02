import PropTypes from 'prop-types';
import { Friend } from "./friend"
import s from "./friendList.module.css";

export const FriendList = ({ friends }) => {
    return (
        <section>
            <ul className={s.list}>
                {friends.map(({ avatar, name, isOnline, id }) => {                   
                    return (<Friend
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline} />)
                })}            
            </ul>
        </section>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
}