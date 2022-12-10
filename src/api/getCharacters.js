import axios from "axios";

async function getCharacters() {
    /*try {
        const resp = await axios({
            url: "https://breakingbadapi.com/api/characters",
            method: "get",
        });
        return resp.data;
    } catch (error) {
        console.log("Error breakingbadapi:",error);
    }*/

    try {
        const resp = await axios.get('./db/characters.json');
        return resp.data;
    } catch (error) {
        console.log("Error localjson:",error);
    }
}
export default getCharacters;