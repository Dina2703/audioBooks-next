import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter(); //this retuns as a router object, which contains a method that we can use to redirect the user.

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="not-found">
      <h1>Oppps....</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
