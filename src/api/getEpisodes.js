import axios from "axios";

async function getEpisodes() {
    try {
        const resp = await axios({
            url: `${process.env.BREAKING_BAD_API}/episodes`,
            method: "get",
        });
        return resp.data;
    } catch (error) {
        console.log(error);
    }
}
export default getEpisodes;