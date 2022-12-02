import axios from "axios";

async function getCharacters() {
    try {
        const resp = await axios({
            url: `${process.env.BREAKING_BAD_API}/characters`,
            method: "get",
        });
        return resp.data;
    } catch (error) {
        console.log(error);
    }
}
export default getCharacters;