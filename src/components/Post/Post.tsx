import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment'

import styles from './post.module.css';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';



/* FORMA DE TIPAR OBJETOS. COMO ESTÁ SENDO DESESTRUTURADO AS PROPS, PRECISAMOS TIPAR TODO O OBJETO!!! */
interface Content {
  type: 'paragraph' | 'link' | 'email' | '#';
  content: string;
}

interface Author {
  name: string;
  role: string;
  avatarURL: string;

}

export interface PostType {
  id?: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

// interface PostProps {
//   post: PostType;
// }
export function Post({ author, publishedAt,content }: PostType) {

  const publishInFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishINRelativeToNow = formatDistanceToNow(publishedAt, {

    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState(
    [{
      id: Math.random(),
      author: {
        source: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
        name: 'Maria',
      },
      content: 'Muito bom, parabéns!!! :)',
      publishedAtComment: new Date('2023-05-13 09:00:00'),

    },

    {
      id: Math.random(),
      author: {
        source: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=50",
        name: 'Devon',
      },
      content: 'Showww 🎓🎓🎓',
      publishedAtComment: new Date('2023-05-13 09:00:00'),

    },]
  );

  const [text, setText] = useState('');



  function hundleRemoveComment(commentID: number) {

    setComments(prevState => {
      return prevState.filter(comment => comment.id !== commentID)
    })
  }

  function hundleSubmitForm(event: FormEvent) {
    event.preventDefault(); // remove o efeito padão do form

    setComments((prevState) => [ //inclui mais um comentário no post
      ...prevState,
      {
        id: Math.random(),
        author: {
          source: "https://avatars.githubusercontent.com/u/103972495?v=4",
          name: 'Ismael Cézar',
        },
        content: text,
        publishedAtComment: new Date('2023-05-13 09:00:00'),
      }
    ])
    setText('')
  }

  function hundleTextChenge(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setText(event.target.value)
  }

  function hundleMensageInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Ei major... informe algo!')
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
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link' || line.type === 'email' || line.type === '#') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
          }
        </div>

      </div>

      <form onSubmit={hundleSubmitForm} className={styles.form}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          onChange={hundleTextChenge} //pega o texto digitado.
          value={text}
          placeholder='Insira seu comentário!'
          required
          onInvalid={hundleMensageInvalid}

        />


        <footer>
          <button type='submit' disabled={text.length === 0}>Publicar</button>
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

