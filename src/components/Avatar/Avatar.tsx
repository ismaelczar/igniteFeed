import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'
import PropTypes from 'prop-types'

interface PostProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  border?: boolean
}

export function Avatar({ border, ...ImgHTMLAttributes }: PostProps) {
  return (
    <img className={border ? styles.avatarBorder : styles.avatar}
      {...ImgHTMLAttributes} />
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,

}