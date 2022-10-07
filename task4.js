// // Task 4: get the neigher countries of Columbia

// const fetchCountry = async (alpha3Code) => {
//   console.log(alpha3Code, "aplha")
//   await fetch(
//     `https://jsonplaceholder.typicode.com/todos/1`
//   ).then(data => data.json()).then((data)=> console.log(data)).catch(error => console.log(error));

// };

// const fetchCountryAndNeighbors = async () => {
//   const columbia = await fetchCountry("col");
//   // const neighbors = await Promise.all(
//   //   columbia.borders.map((borders) => {
//   //     fetchCountry(borders);
//   //   })
//   // );
//   // console.log(neighbors);
// };
// fetchCountryAndNeighbors();

function getUser(userId) {
  return new Promise((resolve, reject) => {
      console.log('Get the user from the database.');
      setTimeout(() => {
          resolve({
              userId: userId,
              username: 'Admin'
          });
      }, 1000);
  })
}

function getServices(user) {
  return new Promise((resolve, reject) => {
      console.log(`Get the services of ${user.username} from the API.`);
      setTimeout(() => {
          resolve(['Email', 'VPN', 'CDN']);
      }, 3 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
      console.log(`Calculate the service cost of ${services}.`);
      setTimeout(() => {
          resolve(services.length * 100);
      }, 2 * 1000);
  });
}

getUser(100).then(getServices).then(getServiceCost).then(console.log());
