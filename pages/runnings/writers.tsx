import React from "react"
import MainLayout from "../../layouts/MainLayout"
import * as Config from "../../config.json"
import SocketIOClient from "socket.io-client";

const socket = SocketIOClient(`${Config.HOST}:${Config.streamText.port}`)

interface Message{
	content: string
	author: string
	date: Date
}
interface WriterContainerState{
	value: string
	messages: Message[]
}


export default class WriterContainer extends React.Component<WriterContainerState>{
	public state: WriterContainerState = {
		value: "",
		messages: [],
	}
	public refName = React.createRef<HTMLInputElement>()
	constructor(props: any){
		super(props)
	}

	handleChangeValue(e: React.FormEvent<HTMLInputElement>) {
		const __value = e.currentTarget.value
		this.setState({ value: __value })
	}

	handleSendMessage(e: React.KeyboardEvent<HTMLInputElement>){
		if(e.code === "Enter"){
			const message: Message = { content: this.state.value, author: this.refName.current?.value || "Chel", date: new Date() }
			socket.emit("messageSEND", message)
			this.setState({ value: "", messages: [...this.state.messages, message] })
		}
	}

	parseDate(date: Date | string): string{
		if(typeof date === "string"){
			const __date = new Date(date)
			const hours = __date.getHours()
			const minutes = __date.getUTCMinutes()
			const seconds = __date.getUTCSeconds()
			return `${hours}:${minutes}:${seconds}`
		}
		else{
			const hours = date.getHours()
			const minutes = date.getUTCMinutes()
			const seconds = date.getUTCSeconds()
			return `${hours}:${minutes}:${seconds}`
		}
	}
	componentDidMount(){
		socket.on("messageGET", (message: Message) => {
			if(message.author !== this.refName.current?.value){
				const __messages = [...this.state.messages, message].sort((last, next) => new Date(last.date).getTime() - new Date(next.date).getTime())
				this.setState({ messages: __messages })
			}
		})
	}
	render(){
		return(
			<MainLayout>
				<h1 style={{fontFamily: "GilroyBlack"}}>Write here!</h1>
				<ul>
					{
						this.state.messages.length !== 0? this.state.messages.map((message, index) => {
							return <li key={index}>
								<span>{message.author} </span>
								<span>{this.parseDate(message.date)}</span>
								<span>{message.content}</span>
							</li>
						}):
						<p>Пока записей нет</p>
					}
				</ul>
				<input type="text" ref={this.refName} /> <br/>
				<input type="text" value={this.state.value} onKeyPress={e => this.handleSendMessage(e)} onChange={e => this.handleChangeValue(e)} />
			</MainLayout>
		)
	}
}
