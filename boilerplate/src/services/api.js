import Axios from 'axios';

  const key = '&api_key=44e652f8d8f1d3b7fb41803bd9ea468a'
  const baseURL = "https://api.themoviedb.org/3/movie/"

  const local = 'vem aqui '
  
  const Api = {
    getFilmes: () => new Promise((resolve, reject) => {
      Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=44e652f8d8f1d3b7fb41803bd9ea468a&language=pt-BR&page=1`).then(
        resp => { 
          resolve(resp.data.results)
        },
        error => { 
          console.log(error.response)
          resolve(resp)
        }
      )
     })  
  };
  
  
  
  export default Api;
  