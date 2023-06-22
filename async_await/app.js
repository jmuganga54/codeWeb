console.log(processData());
processData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`${error}`);
  });


