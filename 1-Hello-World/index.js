const url="https://4geeksacademy.github.io/exercise-assets/txt/hello.txt"

async function loadTextData() {
    const response = axios.get(url);
    console.log(response.data);
}
console.log(loadTextData())