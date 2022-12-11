import axios from "axios";

async function getEpisodes() {
    /*try {
        const resp = await axios({
            url: `https://breakingbadapi.com/api/quotes`,
            method: "get",
        });
        return resp.data;
    } catch (error) {
        console.log("Error breakingbadapi:",error);
    }*/

    try {
        const resp = await axios.get('./db/quotes.json');
        return resp.data;
    } catch (error) {
        console.log("Error localjson:",error);
    }
}
export default getEpisodes;