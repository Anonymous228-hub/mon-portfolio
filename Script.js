function highlight() {
  const items = document.querySelectorAll("#projectList li");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.backgroundColor = "#e0ffe0";
      item.style.transition = "background 0.5s";
    }, index * 300);
  });
}

document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();

 document.getElementById("confirmationMsg").style.display="block";
 this.reset();
});