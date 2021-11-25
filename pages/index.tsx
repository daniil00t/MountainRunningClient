import Head from "next/head"
import MainLayout from "../layouts/MainLayout"

const Main = () => {
	return (
		<div>
			<Head>
				<title>Mountaing Runnings</title>
				{/* <meta name="description" content="Generated by create next app" /> */}
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<h1 style={{fontFamily: "GilroyBlack"}}>Hello!</h1>
			</MainLayout>
		</div>
	)
}

export default Main
