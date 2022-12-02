import axios from "axios";

async function getEpisodes() {
    try {
        const resp = await axios({
            url: `https://breakingbadapi.com/api/quotes`,
            method: "get",
        });
        return resp.data;
    } catch (error) {
        console.log(error);
    }
}
export default getEpisodes;