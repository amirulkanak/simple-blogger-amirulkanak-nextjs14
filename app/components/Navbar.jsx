import Link from 'next/link';

const Navbar = () => {
  const isAuthenticated = false;
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
        {isAuthenticated ? (
          <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">
            Logout
          </button>
        ) : (
          <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
