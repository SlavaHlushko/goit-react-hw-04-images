import axios from 'axios';
const API_KEY = '30601253-2cee3764fd617cb55992ab0f3';

export function getImages(query, pageNumber) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => {
      return response.data;
    });
}
