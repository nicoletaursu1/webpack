export default (text = "I am hungry") => {
  const element = document.createElement("p");
  
  element.innerHTML = text;

  return element;
};
