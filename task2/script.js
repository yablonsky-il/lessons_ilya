const container = document.getElementById("cont");
const ul = document.getElementById("ul");

const func = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responce.json();
  data.forEach(({ title, text }) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.className = "p";
    li.addEventListener("click", () => {
      p.classList.toggle("p1");
    });
    li.innerText = title;
    p.innerText = text;
    ul.append(li);
    ul.append(p);
  });
};

func(4);