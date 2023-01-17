npx create-react-app - done
redux - done
react-redux - done
axios - done
redux thunk - done
react router dom - done
material-ui - done
material-icons - done

Fetch - "
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'e5ddc73865msh2625a608f4eccd6p184b6cjsn7f012a6a9842',
'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
}
};

fetch('https://priceline-com-provider.p.rapidapi.com/v2/hotels/photos?hotel_ids=700000000%2C700000001%2C700000002%2C700000003&image_size=medium', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
"

axios - "
import axios from "axios";

const options = {
method: 'GET',
url: 'https://priceline-com-provider.p.rapidapi.com/v2/hotels/photos',
params: {hotel_ids: '700000000,700000001,700000002,700000003', image_size: 'medium'},
headers: {
'X-RapidAPI-Key': 'e5ddc73865msh2625a608f4eccd6p184b6cjsn7f012a6a9842',
'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
}
};

axios.request(options).then(function (response) {
console.log(response.data);
}).catch(function (error) {
console.error(error);
});
"
