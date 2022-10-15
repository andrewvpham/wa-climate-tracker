import axios from "axios";

class ApiService {

    async getAqiData() {
        // api key aa8a756e-4c80-4aba-b06c-58311032d7eb

        //example headers
        /*
        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        };
        */
        return axios.get('http://api.airvisual.com/v2/city?city=Seattle&state=Washington&country=USA&key=aa8a756e-4c80-4aba-b06c-58311032d7eb')
        .then(resp => {
            return resp.data;
        })
    }

    async getCarbonEmissions() {

    }

    async getNewsFeed() {
        return axios.get('https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=washington state')
        .then(resp => {
            return resp.data;
        })
    }
}

export default new ApiService();