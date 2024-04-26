const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'YOUR_BOT_TOKEN';

// Event listener for when the bot is ready
client.once('ready', () => {
    console.log('Bot is ready!');
});

// Event listener for incoming messages
client.on('message', async message => {
    // Check if the message is a command to start sending messages quickly
    if (message.content === '!startSpam') {
        // Start sending messages quickly
        startSpam(message.channel);
    }

    // Check if the message is a command to stop sending messages
    if (message.content === '!stopSpam') {
        // Stop sending messages
        stopSpam();
    }
});

// Function to start sending messages quickly
function startSpam(channel) {
    // Interval for sending messages (adjust interval as needed)
    const interval = 1000; // 1 second

    // Interval function to send messages
    const intervalFunc = setInterval(() => {
        channel.send('This is a spam message every second!');
    }, interval);

    // Store the interval function for later reference
    client.intervalFunc = intervalFunc;
}

// Function to stop sending messages
function stopSpam() {
    // Clear the interval function if it exists
    if (client.intervalFunc) {
        clearInterval(client.intervalFunc);
        console.log('Spam stopped.');
    }
}

// Log in to Discord with your app's token
client.login(token);
