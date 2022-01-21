import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div>
        <h1 className="logo">Book shop</h1>
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
