import {Message} from "discord.js";

module.exports = async (message: Message): Promise<void> => {
  if (message.author.bot) {
    return;
  }

  const logMessage = [
    "name" in message.channel ? `#${message.channel.name}` : "",
    message.author.tag,
    message.content,
    message.channelId,
    message.id
  ].join(": ");

  console.log(logMessage);
};
