const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const https = require('https');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if(command === 'find') {
		if(args.length < 1) {
			return message.channel.send('usage: !find place');
		}

		let query = args[0];
		for(let i = 1; i < args.length; i++) {
			query += '+' + args[i];
		}

		const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyAkODjZ9JzMPmsuGpwATvrp60I26ocAlrg&query=${query}`;
		let response = '';
		console.log(url);
		// got code from https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
		https.get(url, (resp)=>{
			let data = '';

			// A chunk of data has been recieved.
			resp.on('data', (chunk) => {
				data += chunk;
			});

			// The whole response has been received. Print out the result.
			resp.on('end', () => {
				data = JSON.parse(data);
				if(data.status === 'OK') {
					response += 'The following locations matched your search:\r\n';
					for(let i = 0; i < data.results.length; i++) {
						if(i > 5) break;
						console.log('adding to response');
						response += `${i}: ${data.results[i].name} at ${data.results[i].formatted_address}\r\n`;
					}
					message.channel.send(response);
				}
				else{
					message.channel.send('Couldn\'t complete your search...');
				}
			});
		});
	}
});
