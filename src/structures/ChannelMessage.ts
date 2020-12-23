import { Player, Message } from ".";
import Client from "../client";

/** Represents a Channel message. */
export default class ChannelMessage extends Message<Player> {
	/**
	 * Community of the author that sends the message
	 */
	community: number;
	/**
	 * Channel name the message is sent to
	 */
	channelName: string;

	constructor(
		client: Client,
		author: Player,
		content: string,
		community: number,
		channelName: string
	) {
		super(client, author, content);
		this.community = community;
		this.channelName = channelName;
	}

	/**
	 * Reply the author with a message.
	 * @example
	 * ```js
	 * client.on('roomMessage', (message) => {
	 * 	if (client.nickname == message.author.nickname)
	 * 		return;
	 * 	message.reply('Hello');
	 * }
	 * ```
	 */
	reply(message: string) {
		this.client.sendRoomMessage(`@${this.author.nickname} ${message}`);
	}
}
