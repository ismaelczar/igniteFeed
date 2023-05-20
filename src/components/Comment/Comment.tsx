import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar/Avatar'
import PropTypes from 'prop-types';

import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from 'react';



interface CommentProps{
  id: number;
  author: {
    source : string;
    name: string;
  };
  content: string;
  publishedAtComment: Date;
  onRemoveComment:(number:number) => void;
}

export function Comment({ id, author, content, publishedAtComment, onRemoveComment }: CommentProps) {
  const formattedDate = format(publishedAtComment, "d 'de' MMMM 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const formattedDateDistance = formatDistanceToNow(publishedAtComment, {
    locale: ptBR,
    addSuffix: true,
  })

  const [likes, setLikes] = useState(1);

  function hundleAddLikes() {
    setLikes((prevState) => (
      prevState < 2
        ? prevState + 1
        : prevState = 1))
  }

  return (

    <div className={styles.comment}>
      <Avatar src={author.source} border={false}/>

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
          <button onClick={hundleAddLikes}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

Comment.propTypes = {
  onRemoveComment: PropTypes.func.isRequired,
}

