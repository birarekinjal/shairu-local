const axios = require('axios');

export const getList = (body) => {
  console.log(body, "bisyyy")
  return axios.get('https://673e-42-105-164-205.in.ngrok.io/company/cabin/', { params: { search: body } }).then((resp) => resp.data)
};

// export const getList = (body = {}) => fetch("https://604d-203-88-147-114.in.ngrok.io/company/cabin/",)
//   .then((data) => data.json())
//   .then((res) => res);

export const deleteList = (id) => fetch("https://673e-42-105-164-205.in.ngrok.io/company/cabin/")
  .then((data) => data.json())
  .then((res) => res);

export const editList = async (data) => {
  return axios.post('https://673e-42-105-164-205.in.ngrok.io/company/cabin/', data).then((resp) => resp.data);
}

  // fetch(`https://ef15-203-88-147-114.in.ngrok.io/company/cabin/`, {
  //       method: 'POST',
  //       body: JSON.stringify([body]),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // console.log(data, "data")
  //         alert(data?.message);
  //       });

// export const getList = (body = {}) => {
//   fetch('https://604d-203-88-147-114.in.ngrok.io/company/cabin/', {
//     method: 'GET',
//     body: JSON.stringify(body),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },

//   });
// };
