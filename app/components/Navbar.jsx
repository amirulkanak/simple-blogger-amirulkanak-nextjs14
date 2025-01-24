import Link from 'next/link';
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/profile" className="hover:underline">
            Profile
          </Link>
        </li>
      </ul>
      <div>
        {!(await isAuthenticated()) ? (
          <LoginLink className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">
            Log in
          </LoginLink>
        ) : (
          <LogoutLink className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">
            Log out
          </LogoutLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
