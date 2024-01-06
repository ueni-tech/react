// export const getAllPokemon = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(res => res.json())
//       .then(data => resolve(data));
//   })
// }

// export const getPokemon = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         resolve(data);
//         // console.log(data);
//       })
//   })
// };

import axios from 'axios';

export const getAllPokemon = (url) => {
  return axios.get(url)
    .then(res => res.data)
    .catch(err => console.error(err));
}

export const getPokemon = (url) => {
  return axios.get(url)
    .then(res => res.data)
    .catch(err => console.error(err));
};
