async function fetchUserData() {
  try {
    const response = await fetch(`patNc9iE0ZWFQs2np.1f49ffc5ef9bad580ec7ade20f3aa3c1b1df07927b265ca3bd161ed3ab9f0677`);

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();

    // Map over the array to generate HTML for all products
    const cards = data.map(value => `
      <div class="card">
        <h1 class="title">${value.title}</h1>
        <img src="${value.image}" alt="${value.title}">
        <p class="category">Category: ${value.category}</p>
        <p class="price">$${value.price}</p>
      </div>
    `).join(''); // join to convert array of strings into single HTML string

    // Add all cards to the container
    document.getElementById("cards").innerHTML = cards;

    console.log('API Response: ', data);
    return data;

  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

fetchUserData();






// fetch('https://fakestoreapi.com/products').then( (data)=>{
//   return data.json();
// }).then((completedata)=>{
//   console.log(completedata)
//   completedata.map((value)=>{
//     data=`<div class="card">
//               <h1 class="title"> ${value?.title}</h1>
//               <img src=${value?.image} alt="">
//               <p class="catagory">Category: ${value?.category}</p>
//               <p class="price">${value?.price}</p>
//           </div>`
//   })
  
//   document.getElementById("cards").innerHTML=data;
   
// }).catch((err)=>{
//   console.log(err);
// })