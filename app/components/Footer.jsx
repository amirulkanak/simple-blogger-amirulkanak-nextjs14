import Link from 'next/link';

const Footer = () => {
  return (
    <section className="mt-auto p-4 bg-slate-200">
      <div className="text-center text-slate-700">
        <p>
          &copy; {new Date().getFullYear()} {` `}
          <Link
            href="https://github.com/amirulkanak"
            target="_blank"
            className="underline italic text-violet-500">
            Amirul Kanak
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
