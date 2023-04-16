import fetch from 'node-fetch';
export async function fetchData(){
    fetch('https://script.google.com/macros/s/AKfycbzJV9TWQV8K4E5puzw2sxA2GJM1KgdixyuCBzRqDBQcNenEPqSm5eSNFTJhH5Jdbhb2/exec')
    .then(res=>res.json())
    .then(data=>{
        return data;
    })
}