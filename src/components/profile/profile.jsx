import PropTypes from 'prop-types';
import s from "./profile.module.css";

export const Profile = (props) => {
    const { username, tag, location, avatar, stats } = props;
    return (
        <section className={s.profile}>
            <div className={s.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={s.avatar}
                />
                <p className={s.name}>{username}</p>
                <p className={s.tag}>{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li className={s.item}>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{stats.followers}</span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>{stats.views}</span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </section>)
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
}

