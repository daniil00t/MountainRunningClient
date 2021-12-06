import React, { useEffect, useState } from "react"
import * as Config from "../config.json"
import SocketIOClient from "socket.io-client";

const socket = SocketIOClient(`${Config.HOST}:${Config.streamText.port}`)

import classes from "../styles/components/TextStreamComponent.module.scss"


interface Message{
	content: string
	author: string
	date: Date
}

interface TextStreamComponentState{
	messages: Message[]
}
interface TextStreamComponentProps{

}

export default class TextStreamComponent extends React.Component<TextStreamComponentProps, TextStreamComponentState>{
	public state: TextStreamComponentState = {
		messages: []
	}

	constructor(props: TextStreamComponentProps){
		super(props)


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
		socket.on("connection", (data) => {
			console.log(data);
		})
		socket.on("messageGET", (message: Message) => {
			console.log(message);
			const __messages = [ message, ...this.state.messages].sort((last, next) => new Date(next.date).getTime() - new Date(last.date).getTime())
				this.setState({ messages: __messages })
		})
	}
	render(){
		return(
			<div className={classes.text_stream_container}>
				<ul className={classes.text_stream_container__list}>
					{
						this.state.messages.map((message, index) => {
							return <li key={index} className={classes.text_stream_container__item}>
								<span className={classes.text_stream_container__item__author} >{message.author}</span>
								<span className={classes.text_stream_container__item__date}>{this.parseDate(message.date)}</span>
								<span className={classes.text_stream_container__item__content} >{message.content}</span>
							</li>
						})
					}
				</ul>
			</div>
		)
	}
}
