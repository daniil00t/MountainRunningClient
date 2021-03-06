import Head from "next/head"
import TextStreamComponent from "../components/TextStreamComponent"
import MainLayout from "../layouts/MainLayout"
import MainSlider from "../layouts/main_layouts/MainSlider"


const Main = () => {
	return (

		<>
			<Head>
				<title>Mountaing Runnings</title>
				{/* <meta name="description" content="Generated by create next app" /> */}
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<MainSlider />

				<section style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
					<h1 style={{textAlign: "center"}}>Text Stream</h1>
					<TextStreamComponent/>
				</section>
			</MainLayout>
		</>
	)
}

export default Main
