import { Outlet, Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <ul>
        <Link to='/'>
          <li>Posts</li>
        </Link>
        <Link to='/postAdd'>
          <li>Add</li>
        </Link>
      </ul>
      <Outlet />
    </>
  );
}
