import React from "react";
import MainLayout from "../../layouts/MainLayout";
import TextStreamComponent from "../../components/TextStreamComponent";



export default class ReaderStream extends React.Component{
	constructor(props: any){
		super(props)
	}
	render(){
		return(
			<MainLayout>
				<h1 style={{fontFamily: 'GilRoyBlack'}}>Messages</h1>
				<TextStreamComponent/>
			</MainLayout>
		)
	}
}