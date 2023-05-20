import { Header } from './components/Header/Header.jsx';
import { Post, PostType } from './components/Post/Post.jsx'
import { Aside } from './components/Aside/Aside.jsx'

import './global.css';
import styles from './App.module.css'


function App() {

  const posts:PostType[] = [
    {
      id: 1,
      author: {
        avatarURL: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=50',
        name: 'Jane Cooper',
        role: 'Dev Front-End',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' },
      ],

      publishedAt: new Date('2023-05-13 07:30:00'),

    },

    {
      id: 2,
      author: {
        avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
        name: 'Mary',
        role: 'Ux Designer',
      },
      content: [
        { type: 'paragraph', content: 'Fala pessoal' },
        { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
        { type: 'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design' },
        { type: 'email', content: 'exemplo@email.com' },
        { type: '#', content: '#novoprojeto' },
      ],

      publishedAt: new Date('2023-05-12 20:00:00'),


    },
  ];

  return (
    <>
      <Header />

      <div className={styles.wapper}>

        <Aside />
        <main>

          {
            posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}

              />
            ))}
        </main>

      </div>
    </>
  )
}

export default App
