import MainLayout from "../../layouts/MainLayout"
import Link from "next/link"

const About = () => {
	return (
		<MainLayout>
			<h1 style={{fontFamily: "GilroyBlack"}}>Runnings!</h1>
			<Link href="/runnings/writers"><a>for writers</a></Link><br/>
			<Link href="/runnings/readers"><a>for readers</a></Link>
		</MainLayout>
	)
}

export default About
