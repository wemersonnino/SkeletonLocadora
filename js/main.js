import "/js/typescript/exemplo01";
$(document).ready(function () {
  $("#button-send button").on("click", function () {
    console.log("test button login");
  })
});

let addEventListener;
({addEventListener} = document.getElementById('loginForm'));
addEventListener('click', function () {
  console.log("Evento do javascript sem ser jquery");
})


const fibonacci = (number) =>{
  let arrayFib = [];
  arrayFib[0] = 1;
  arrayFib[1] = 1;
  for (let index = 2; index < arrayFib.length; index++) {
    const element = arrayFib[index];
    element[index] * element[index + 1];
    console.log(element);
  }

}

fibonacci(5);


const test1 = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];



test1.forEach((item) =>{
  if (item % 3 === 0)
    item += 100;
  console.log(item);
})

//console.log(test);

