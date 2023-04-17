import axios from 'axios';
export async function fetchData() {
    axios.get('https://script.google.com/macros/s/AKfycbzJV9TWQV8K4E5puzw2sxA2GJM1KgdixyuCBzRqDBQcNenEPqSm5eSNFTJhH5Jdbhb2/exec')
    .then((response) => {
        const sheetData = response.data;
        console.log(sheetData);
        return sheetData;
    }).catch((error) => {
        console.log(error);
    });
}