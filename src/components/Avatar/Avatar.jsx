import styles from './Avatar.module.css'
import PropTypes from 'prop-types'

export function Avatar({ src = true, border }) {
  return (
    <img className={
      border 
        ? styles.avatarBorder
        : styles.avatar}
      src={src} />
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  
}