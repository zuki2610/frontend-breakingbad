import axios from "axios";

async function getCharacters() {
    try {
        const resp = await axios({
            url: "https://breakingbadapi.com/api/characters",
            method: "get",
        });
        return resp.data;
    } catch (error) {
        console.log(error);
    }
}
export default getCharacters;