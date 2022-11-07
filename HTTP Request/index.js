const http = require('axios');

const url = 'https://ddragon.leagueoflegends.com/api/versions.json';

http.get(url).then((response) =>
{
    const version = response.data[0];
    const date = new Date().toLocaleDateString();
    const download = `https://ddragon.leagueoflegends.com/cdn/dragontail-${version}.tgz`;

    console.log(`Version: ${version}`);
    console.log(`Date: ${date}`);
    console.log(`Download: ${download}`);
});
