import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
          src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
          alt=""
          width={1280}
          height={300} />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">
            Next.jsの勉強中
          </Link>
          <p>By. ueniTech, Published on 2023/07/15</p>
          <Link href="#">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quas esse, placeat tenetur, explicabo ducimus molestias quos dicta enim quam quo aperiam corrupti quod, facere nulla sit autem mollitia provident!
          </Link>
          <Link href="#">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList