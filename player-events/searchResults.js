module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: '#304FFE',
            author: { name: `Here are your search results for ${query}` },
            footer: { text: 'PLAYING BRAWL STARS' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};
