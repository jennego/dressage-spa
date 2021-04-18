let API_URL =
  process.env.NODE_ENV === "production"
    ? "https://dressage-tests.herokuapp.com/"
    : "https//localhost:3000";

let BASE_URL = API_URL;
// function getJwt() {
//     return localStorage.getItem('jwt');
// }

export const DressageTest = {
  // create(params) {
  //     return fetch(
  //         `${BASE_URL}/api/v1/`,
  //         {
  //             method: 'POST',
  //             headers: {
  //                 'Authorization': `JWT ${getJwt()}`,
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify(params)
  //         }
  //     ).then(res => res.json())
  // },

  getAll() {
    return fetch(`${BASE_URL}/api/v1/dressage_tests`, {
      // headers: { 'Authorization': `JWT ${getJwt()}` }
    }).then((res) => res.json());
  },

  get(id) {
    return fetch(`${BASE_URL}/api/v1/dressage_tests/${id}`, {
      // headers: { 'Authorization': `JWT ${getJwt()}` }
    }).then((res) => res.json());
  },
};

// export const Token = {
//     create(params) {
//         return fetch(
//             `${BASE_URL}/api/v1/tokens`,
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(params)
//             }
//         ).then(res => {
//             if (res.status === 200) {
//                 return res.json();
//             } else {
//                 return { error: 'Something went wrong!' };
//             }
//         });
//     }
// }
