import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="logo">
        <Link href="/" passHref>
          <Image src="/logo.png" alt="logo pic" width={150} height={130} />
        </Link>
      </div>
      <Link href="/">
        <a className={router.pathname == "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname == "/about" ? "active" : ""}>About</a>
      </Link>
      <Link href="/books">
        <a className={router.pathname == "/books" ? "active" : ""}>Home</a>
      </Link>
    </nav>
  );
};

export default Navbar;
