//Example fetch using DnD5eAPI - place subclasses in ul
// document.querySelector("button").addEventListener("click", getFetch);

// function getFetch() {
//   const choice = document.querySelector("input").value;
//   const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

//   fetch(url)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       console.log(data.subclasses[0].index);
//       document.querySelector("h4").innerText = data.subclasses[0].index;
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });

// }

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const sub = data.subclasses.length;
      // for (let i = 0; i < sub; i++) {
      //   console.log(i);
      //   document.querySelector("ul").innerHTML = data.subclasses[i].name;
      // }
      data.subclasses.forEach((obj) => {
        console.log(obj.name);
        //create an LI
        const li = document.createElement("li");
        // add text to li
        li.textContent = obj.name;
        // append the li to the ul
        document.querySelector("ul").appendChild(li);
      }); //looping through the array.
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
