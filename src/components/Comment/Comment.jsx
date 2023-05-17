import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar/Avatar'
import PropTypes from 'prop-types'

import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'


export function Comment({id ,author, content, publishedAtComment, onRemoveComment}) {
  const formattedDate = format(publishedAtComment, "d 'de' MMMM 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const formattedDateDistance = formatDistanceToNow(publishedAtComment, {
    locale: ptBR,
    addSuffix: true,
  })


  return (

    <div className={styles.comment}>
      <Avatar src={author.src} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div>
              <strong>{author.name}</strong>
              <time title={formattedDate} dateTime={publishedAtComment.toISOString()}>{formattedDateDistance}</time>
            </div>
            
            <button onClick={() => onRemoveComment(id)} title='Remover comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

      <footer>
        <button>
          <ThumbsUp /> 
          Aplaudir <span>03</span>
          </button>
      </footer>
      </div>
    </div>
  )
}

Comment.propTypes = {
  comentario: PropTypes.string.isRequired,
  onRemoveComment: PropTypes.func.isRequired,
}

