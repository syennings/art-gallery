import Link from "next/link";

export function Navigation() {
  return (
    <nav className="navbar">
      <Link href="/art-pieces" passHref>
        <div className="nav-link">Link To All Art</div>
      </Link>
      <Link href="/" passHref>
        <div className="nav-link">Link to the Spotlight Page</div>
      </Link>
      <Link href="/favorites" passHref>
        <div className="nav-link">Favorites</div>
      </Link>

      <style jsx>{`
        .navbar {
          color: white;
          background-color: #111;
          padding: 10px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          text-decoration: none;
        }

        .nav-link {
          cursor: pointer; /* Add pointer cursor for better UX */
          font-family: "Verdana", sans-serif;
          font-size: 16px;
          color: darkgrey;
          &:hover {
            color: orange;
            text-decoration: none;
          }
        }

        /* Add any additional styling as needed */
      `}</style>
    </nav>
  );
}
