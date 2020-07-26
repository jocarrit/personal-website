import Link from 'next/link'

const Navbar:React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/Work">
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/Contact">
            <a>Say hi!</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
