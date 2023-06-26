const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

n = 0; 
while (n < ingredients.length){
  console.log (ingredients[n]);
  n++
}

for (let ingredient of ingredients){
  console.log (ingredient);
}

for (let i = ingredients.length-1; i >= 0; i--){
  console.log (ingredients[i]);
}