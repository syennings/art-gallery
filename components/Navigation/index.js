import Link from "next/link";
import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/art-pieces" passHref>
        All Art
      </Link>
      <Link href="/" passHref>
        Spotlight Page
      </Link>
      <Link href="/favorites" passHref>
        Favorites
      </Link>
    </nav>
  );
}
