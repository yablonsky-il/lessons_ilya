const container = document.getElementById("cont");
const ul = document.getElementById("ul");

const func = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responce.json();
  data.forEach(({ title, body }) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.className = "p";
    li.addEventListener("click", () => {
      p.classList.toggle("p1");
    });
    li.innerText = title;
    p.innerText = body;
    ul.append(li);
    ul.append(p);
  });
};

func(4);



// const container = document.getElementById("cont");
// const ul = document.getElementById("ul");

// const func = async () => {
//   const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await responce.json();
//   data.forEach(({ title }) => {
//     const li = document.createElement("li");
//     const p = document.createElement("p");
//     li.innerText = title;
    
//     ul.prepend(li);

//   });
// };

// func(4);