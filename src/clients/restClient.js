const baseUrl = "https://api.imgflip.com"

class RestClient {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    async getMemes() {
        const url = `${this.baseUrl}/get_memes`;
        const resp = await fetch(url);
        const data =  resp.json();
        return data;
    }
}

const restClient = new RestClient(baseUrl)

export { restClient }
