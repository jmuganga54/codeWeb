// const puzzle = getPuzzle((error, data) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(data);
//   }
// });

// getPuzzleAsyn(4).then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// const puzzleSync = getPuzzleSync();
// console.log(puzzleSync);

// const country = getCountryFlag("KE", (error, data) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(data);
//   }
// });

// const tip20 = createTipper(.2)
// console.log(tip20(100))

// const getData = getDataCallback((error, data) => {
//   if (error) {
//     console.log(`Error: ${error}`)
//   } else if (data) {
//     console.log(data);
//   }
// });

// getDataPromise().then(
//   (data) => {
//     console.log(`Promise 1 ${data}`);
//   },
//   (err) => {
//     console.log(`Promise 1 ${err}`);
//   }
// );

// getDataPromise().then(
//   (data) => {
//     console.log(`Promise 2 ${data}`);
//   },
//   (err) => {
//     console.log(`Promise 2 ${err}`);
//   }
// );

// getDataCallbackNew(2, (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     getDataCallbackNew(data, (error, data) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(data);
//       }
//     });
//   }
// });

// getPromiseData(`10`)
//   .then((data) => {
//     return getPromiseData(data);
//   })
//   .then((data) => {
//     return getPromiseData(data);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetchPuzzle()
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("Unable to fetch the puzzle");
//     }
//   })
//   .then((data) => {
//     console.log(data.puzzle);
//   })
//   .catch((error) => {
//     console.log(`${error}`);
//   });

// getCountryFetchAPI("TZ")
//   .then((flag) => {
//     console.log(flag);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

// getPuzzleFetchAPI(4)
//   .then((data) => {
//     console.log(data.puzzle);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

// fetchLocationIP()
//   .then((data) => {
//     return getCountryFetchAPI(data.country);
//   })
//   .then((flag) => {
//     console.log(flag);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

// getPuzzleAsynAwait(4)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error: ${error}");
//   });

// getCountryAsyncAwait()
//   .then((data) => {
//     console.log(
//       `Your currently in ${data.country},${data.region},${data.city}`
//     );
//   })
//   .catch((error) => {
//     console.log(`${error}`);
//   });

getCountryFlagAsyncAwait("TZ")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`${error}`);
  });
