const baseUrl = 'http://localhost:8080/api/excuses/'

export const getRandomExcuse = async () => {
  const response = await fetch(`${baseUrl}random-excuse`);
  return await response.json();
}


// export const getRandomExcuse = () => {
//     return fetch(`${baseUrl}random-excuse`).then((res) => {
//       return res.json();
//     });
// }

