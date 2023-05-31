import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    const postList = posts.map((post) => (
    <Article key={post.id} tiitle={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
    ))
  return (
    <main>
        {postList}
    </main>
  )
}

export default ArticleList