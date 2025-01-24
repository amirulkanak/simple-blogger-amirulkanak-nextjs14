import Link from 'next/link';
const isAuthenticated = false;
const Navbar = async () => {
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
        {!isAuthenticated ? (
          <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">
            Log in
          </button>
        ) : (
          <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">
            Log out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
