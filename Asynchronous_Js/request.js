const getPuzzleAsyn = (wordCount) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data);
      } else if (e.target.readyState === 4) {
        reject("Something went wrong");
      }
    });

    request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
  });
};

const getPuzzleFetchAPI = (wordCount) => {
  return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      return data;
    });
};
const getPuzzleSync = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=3");
  request.send();

  if (request.target.readyState === 4 && request.target.status === 200) {
    const data = JSON.parse(request.target.responseText);
    return data;
  } else if (request.target.readyState === 4) {
    throw new Error("Something went wrong");
  }
};

const getCountryFlag = (countryCode, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      let country = data.filter((country) => {
        return country.cca2 === countryCode;
      });
      callback(undefined, country[0].flag);
    } else if (e.target.readyState === 4) {
      console.log("Something went wrong", undefined);
    }
  });

  request.open("GET", "https://restcountries.com/v3.1/all");
  request.send();
};

const getCountryFetchAPI = (countryCode) => {
  return fetch("https://restcountries.com/v3.1/all", {})
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      const country = data.filter((country) => {
        return country.cca2 === countryCode;
      });
      return country[0].flag;
    });
};

const getCountryFlagAsync = (countryCode) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        let country = data.filter((country) => {
          return country.cca2 === countryCode;
        });
        resolve(country[0].flag);
      } else if (e.target.readyState === 4) {
        reject("Something went wrong");
      }
    });

    request.open("GET", "https://restcountries.com/v3.1/all");
    request.send();
  });
};

const createTipper = (baseTip) => {
  return (amount) => {
    return baseTip * amount;
  };
};

const getDataCallback = (callback) => {
  setTimeout(() => {
    return callback(undefined, "This is incoming data");
  }, 2000);
};
const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("All the activities are fine");
      reject("This is the promise error");
    }, 2000);
  });
};

const getDataCallbackNew = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2);
    } else {
      callback("You must provide a number");
    }
  }, 2000);
};

const getPromiseData = (num) => {
  return new Promise((resolve, reject) => {
    typeof num === "number"
      ? resolve(num * 2)
      : reject("Number must be provided");
  });
};

const fetchPuzzle = () => {
  return fetch("http://puzzle.mead.io/puzzle", {});
};

const fetchLocationIP = () => {
  return fetch("https://ipinfo.io/json?token=30215cf9b60933", {})
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((jsonResponse) => {
      return {
        // ip: jsonResponse.ip,
        city: jsonResponse.city,
        country: jsonResponse.country,
        region: jsonResponse.region,
        // timezone: jsonResponse.timezone,
      };
    });
};
