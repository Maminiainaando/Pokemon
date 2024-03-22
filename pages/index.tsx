// pages/index.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/server">
            Server
          </Link>
        </li>
        <li>
          <Link href="/client">
            Client
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
