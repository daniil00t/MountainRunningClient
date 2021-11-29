import React from "react";
import MainLayout from "../../layouts/MainLayout";
import * as Config from "../../config.json"
import SocketIOClient from "socket.io-client";

const socket = SocketIOClient(`${Config.HOST}:${Config.streamText.port}`)


interface Message{
	content: string
	author: string
	date?: Date
}

interface ReaderStreamState{
	messages: Message[]
}

export default class ReaderStream extends React.Component<ReaderStreamState>{
	public state: ReaderStreamState = {
		messages: []
	}
	constructor(props: any){
		super(props)
	}
	componentDidMount(){
		socket.on("connection", (data) => {
			console.log(data);
		})
		socket.on("messageGET", (message: Message) => {
			this.setState({ messages: [...this.state.messages, message] })
		})
	}
	render(){
		return(
			<MainLayout>
				<h1 style={{fontFamily: 'GilRoyBlack'}}>Messages</h1>
				<ul>
					{
						this.state.messages.map((message, index) => {
							return <li key={index}>
								<span>{message.author} </span>
								<span>{message.date?.toString()}</span>
								<span>{message.content}</span>
							</li>
						})
					}
				</ul>
			</MainLayout>
		)
	}
}