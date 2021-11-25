import classes from "../styles/layouts/Header.module.scss"
import colors from "../styles/exports.module.scss"
import Link from "next/link"

const Header = () => {
	return(
		<header className={classes.main_header}>
			<div className="__container__">
				<nav className={classes.main_header_nav}>
					<div className="panel_left">
						<div className={classes.panel_left__logo}>
							<Link href="/"><a><span className="main_logo">Ski<span style={{color: colors.colorMain}}>Mo</span></span></a></Link>
						</div>
					</div>
					<div className="panel_right">
						<ul className={classes.panel_right__list}>
							<li className={classes.panel_right__list__item}><Link href="/"><a>Home</a></Link></li>
							<li className={classes.panel_right__list__item}><Link href="/about"><a>About</a></Link></li>
							<li className={classes.panel_right__list__item}><Link href="/contacts"><a>Contacts</a></Link></li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header