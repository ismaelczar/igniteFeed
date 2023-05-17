import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment'

import styles from './post.module.css';
import { useState } from 'react';




export function Post({ author, publishedAt, content }) {

  const publishInFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishINRelativeToNow = formatDistanceToNow(publishedAt, {

    locale: ptBR,
    addSuffix: true,
  });

  const [createNewText, setCreateNewText] = useState(''); //ESTADO PARA O TEXTAREA

  const [comments, setComments] = useState(
    [{
      id: Math.random(),
      author: {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
        name: 'Maria',
      },
      content: 'Muito bom, parabéns!!! :)',
      publishedAtComment: new Date('2023-05-13 09:00:00'),
    },

    {
      id: Math.random(),
      author: {
        src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=50",
        name: 'Devon',
      },
      content: 'Showww 🎓🎓🎓',
      publishedAtComment: new Date('2023-05-13 09:00:00'),
    },]
  );

  function hundleRemoveComment(commentID) {
    setComments(prevState => {
      return prevState.filter(comment => comment.id !== commentID)
    })
  }

  function hundleSubmitForm() {
    event.preventDefault();

    setComments((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        author: {
          src: "https://avatars.githubusercontent.com/u/103972495?v=4",
          name: 'Ismael Cézar',
        },
        content: createNewText,
        publishedAtComment: new Date('2023-05-16 22:00:00'),
      }
    ]
    )  
    setCreateNewText('');

  }

  function hundleNewCommentChage() {
    setCreateNewText(event.target.value)
  }


  return (
    <article className={styles.post}>
      <header>

        <div className={styles.container}>
          <Avatar
            border
            src={author.avatarURL}

          />

          <div className={styles.profile}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishInFormatted} dateTime={publishedAt.toISOString()}>
          {publishINRelativeToNow}
        </time>

      </header>

      <div className={styles.content}>
        <div className={styles.contentLink}>
          {content.map(line => {
            if (line.type === 'paragraph') {
              return <p>{line.content}</p>;
            } else if (line.type === 'link' || line.type === 'email' || line.type === '#') {
              return <p><a href="#">{line.content}</a></p>
            }
          })
          }
        </div>


      </div>

      <form onSubmit={hundleSubmitForm} className={styles.form}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder='Digite seu comentário!'
          onChange={hundleNewCommentChage}
          value={createNewText}
        />


        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      {comments.map(post => (

        <Comment
          key={post.id}
          id={post.id}
          author={post.author}
          content={post.content}
          publishedAtComment={post.publishedAtComment}
          onRemoveComment={hundleRemoveComment}
        />
      ))}


    </article>
  )
}

