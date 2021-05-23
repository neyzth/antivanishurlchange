const Client = require("discord.js");
client = new Client()
const fetch = require('node-fetch');
client.on('ready', async () => {
    console.log("connecté")
})
client.login("token de bot ici")

client.on("guildUpdate", async (oldGuild, newGuild) => {
    if(oldGuild.vanityURLCode === newGuild.vanityURLCode) return;

    if (!channel.guild.me.permissions.has("VIEW_AUDIT_LOG")) return;
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'GUILD_UPDATE'
    })
    const vanityurlmodifier = fetchGuildAuditLogs.entries.first();
    const { executor } = vanityurlmodifier;
            await fetch(`https://discord.com/api/v8/guilds/${newGuild.id}/vanity-url`, {
                    "credentials": "include",
                    "headers": {
                        "accept": "*/*",
                        "authorization": "Bot " + client.token,
                        "content-type": "application/json",
                    },
                    "referrerPolicy": "no-referrer-when-downgrade",
                    "body": JSON.stringify({
                        "code": oldGuild.vanityURLCode
                    }),
                    "method": "PATCH",
                    "mode": "cors"
                });
            await executor.kick("modification de l'url non autorisée")
            oldGuild.ownerID.send("Tentative de modification de l'url non autorisée !")
})