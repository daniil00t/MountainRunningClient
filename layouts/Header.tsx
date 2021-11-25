import classes from "../styles/layouts/Header.module.scss"
import Link from "next/link"

const Header = () => {
	return(
		<header className={classes.main_header}>
			<nav className={classes.main_header_nav}>
				<ul className={classes.main_header_nav__list} >
					<li className={classes.main_header_nav__list__item}><Link href="/"><a>Home</a></Link></li>
					<li className={classes.main_header_nav__list__item}><Link href="/about"><a>About</a></Link></li>
					<li className={classes.main_header_nav__list__item}><Link href="/contacts"><a>Contacts</a></Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header