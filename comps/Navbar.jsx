import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div  className="logo">
        <h1>BOOK HOUSE</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/books">
        <a>Book Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
