import Header from "./Header"
import Footer from "./Footer"

import classes from "../styles/layouts/MainLayout.module.scss"


const MainLayout: React.FC = ({ children }) => {
	return(
		<div id="root">
			<Header />
			<main className={classes.main_section}>
				{children}
			</main>
			<Footer />
		</div>
		
	)
}

export default MainLayout