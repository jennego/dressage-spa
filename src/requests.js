let BASE_URL = process.env.REACT_APP_SERVER_BASE;

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
  getWithUser(id, user) {
    return fetch(
      `${BASE_URL}/api/v1/dressage_tests/${id}?user=${user}`,
      {}
    ).then((res) => res.json());
  },
};

export const Favourite = {
  getAllByUser(user) {
    return fetch(`${BASE_URL}/api/v1/favourites?user=${user}`, {}).then((res) =>
      res.json()
    );
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
