import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <Link href="/" passHref><Image src="/logo.png" alt="logo pic" width={150} height={130} /></Link>
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
