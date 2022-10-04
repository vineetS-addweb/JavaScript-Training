const myObj = [
  {
    ID: 1,
    Name: "Amit",
    Percentage: 25,
  },
  {
    ID: 2,
    Name: "Ankit",
    Percentage: 32,
  },
  {
    ID: 3,
    Name: "Varun",
    Percentage: 78,
  },
  {
    ID: 4,
    Name: "Prakash",
    Percentage: 55,
  },
  {
    ID: 5,
    Name: "Ajay",
    Percentage: 36,
  },
  {
    ID: 6,
    Name: "Vineet",
    Percentage: 98,
  },
  {
    ID: 7,
    Name: "Harsh",
    Percentage: 99,
  },
  {
    ID: 8,
    Name: "Jay",
    Percentage: 46,
  },
  {
    ID: 9,
    Name: "Raj",
    Percentage: 39,
  },
  {
    ID: 10,
    Name: "Vikas",
    Percentage: 65,
  },
];

// const maxValue = () => {
//   const high = myObj.filter(
//     (ans) =>
//       ans.Percentage == Math.max(...myObj.map((output) => output.Percentage))
//   );
//   const myMax = JSON.stringify(high);
//   document.querySelector("#text1").innerHTML = myMax;
//   console.log(myMax)
// }

// const minValue = () => {
//   const low = myObj.filter(
//     (ans) =>
//       ans.Percentage == Math.min(...myObj.map((output) => output.Percentage))
//   );
//   const myMin = JSON.stringify(low);
//   document.getElementById("text2").innerHTML = myMin;
//   console.log(myMin)
// }

// function maxValue() {
//   let result1 = myObj.reduce((first, second) => {
//     let max = first.Percentage;
//     if (first.Percentage < second.Percentage) {
//       max = second;
//     } else {
//       max = first;
//     }
//     return max;
//   });
//   const val1 = JSON.stringify(result1);
//   document.getElementById("text1").innerHTML = val1;
//   console.log(val1)
// }

// function minValue() {
// let result2 = myObj.reduce((first, second) => {
//   let min = first.Percentage;
//   if (first.Percentage > second.Percentage) {
//     min = second;
//   } else {
//     min = first;
//   }
//   return min;
// });
//   const val2 = JSON.stringify(result2);
//   document.getElementById("text2").innerHTML = val2;
//   console.log(val2)
// }

function buildTable(data) {
  var table = document.getElementById("myTable");

  for (var i = 0; i < data.length; i++) {
    var row = `
                <tr>
                  <td>${data[i].ID}</td>
                  <td>${data[i].Name}</td>
                  <td>${data[i].Percentage}</td>
                </tr>`;

    table.innerHTML += row;
  }
}
buildTable(myObj);

function maxValue() {
  let result1 = myObj.reduce((first, second) => {
    let max = first.Percentage;
    if (first.Percentage < second.Percentage) {
      max = second;
    } else {
      max = first;
    }
    return max;
  });
  for (var i = 0; i < myObj.length; i++) {
    if (myObj[i] == result1) {
      var removed = myObj.splice(i, 1);
      console.log(removed);
    }
  }
  myObj.unshift(result1);

  const val1 = JSON.stringify(myObj);

  document.getElementById("text1").innerHTML = val1;
  console.log(val1);
}





function minValue() {
  
  let result2 = myObj.reduce((first, second) => {
    let min = first.Percentage;
    if (first.Percentage > second.Percentage) {
      min = second;
    } else {
      min = first;
    }
    return min;
  });
  for (var i = 0; i < myObj.length; i++) {
    if (myObj[i] == result2) {
      var removed = myObj.splice(i, 1);
      console.log(removed)
    }
  }
  myObj.push(result2);

  const val2 = JSON.stringify(myObj);
  document.getElementById("text2").innerHTML = val2;
  console.log(val2);
}
