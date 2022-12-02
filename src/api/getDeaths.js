import axios from "axios";

async function getDeaths() {
    try {
        const resp = await axios({
            url: `${process.env.BREAKING_BAD_API}/deaths`,
            method: "get",
        });
        return resp.data;
    } catch (error) {
        console.log(error);
    }
}
export default getDeaths;