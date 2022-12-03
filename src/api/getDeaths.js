import axios from "axios";

async function getDeaths() {
    try {
        const resp = await axios({
            url: `https://breakingbadapi.com/api/deaths`,
            method: "get",
        });
        return resp.data;
    } catch (error) {
        console.log(error);
    }
}
export default getDeaths;