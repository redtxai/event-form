export type Post = {
  id: number
  title?: string
  text?: string
  date: Date
  username: string
  img?: boolean
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'This is a post title that may wrap over two lines',
    text: 'Mauris venenatis efficitur lectus. Nulla posuere risus nec mattis tristique. Donec porta enim vitae dolor pharetra pretium sit amet sit amet elit. Nulla maximus pulvinar imperdiet. In faucibus vitae urna ac aliquam. Donec porttitor sagittis nisl, quis accumsan elit facilisis ac. Vestibulum erat lorem, vestibulum eget semper id',
    username: 'Jane Smith',
    date: new Date('08/12/2022'),
    img: false
  },
  {
    id: 2,
    title: 'This is a post title that may wrap over two lines',
    text: 'Mauris venenatis efficitur lectus. Nulla posuere risus nec mattis tristique. Donec porta enim vitae dolor pharetra pretium sit amet sit amet elit. Nulla maximus pulvinar imperdiet. In faucibus vitae urna ac aliquam. Donec porttitor sagittis nisl, quis accumsan elit facilisis ac. Vestibulum erat lorem, vestibulum eget semper id',
    username: 'Jane Smith',
    date: new Date('08/12/2022'),
    img: true
  }
]
