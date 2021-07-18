const tabContainer = document.getElementById("tabContainer");
const textBlock = document.getElementById("textBlock");

const createTab = (user) => {
  const tab = document.createElement("div");
  tab.id = user.id;
  tab.innerText = `tab${user.id}`;
  tabContainer.append(tab);
  console.log(user);
};

const createText = (user) => {
  const text = document.createElement("div");
  text.classList.add(`invisible`);
  text.id = `user_${user.id}`
  const element = `
   <div>${user.name}</div>
   <div>${user.username}</div>
   <div>${user.email}</div>
   <div>
     <div>${user.address.street}</div>
     <div>${user.address.suite}</div>
     <div>${user.address.city}</div>
     <div>${user.address.zipcode}</div>
     <div>
       <div>${user.address.geo.lat}</div>
       <div>${user.address.geo.lng}</div>
     </div>
   </div>
    `;
  text.innerHTML = element
  if (user.id === 1) {
    text.classList.add("visible");
  }
  text.classList.add(`class${user.id}`);
  textBlock.append(text);
};

const func = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  data.forEach((user) => {
    createTab(user);
    createText(user);
  });
};
func();



tabContainer.addEventListener("click", (event) => {
  const elemId = event.target.id;
  if (elemId === "tabContainer") {
    return;
  }

  let asd = document.getElementById(elemId)
  console.log(asd)
  const nextVisible = document.querySelector(`#user_${elemId}`);
  const prevVisible = document.querySelector(".visible");

  if (prevVisible) {
    prevVisible.classList.remove("visible");
  }
  nextVisible.classList.add("visible");
});