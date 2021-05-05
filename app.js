let btn = document.getElementById("btn-main");

btn.addEventListener("click", function () {
  console.log("hi");
  let main = document.getElementsByClassName("main");
  let myskill = document.getElementById("myskill");

  if(main.classList.contains("none")){

  }else{
    main.classList.add("none");
  }

 if(main.hasAttribute("id")){
  main.removeAttribute("id");
}

  myskill.classList.add("mskill");
  myskill.removeAttribute("id");
});

let navskill = document.getElementById("nav-skill");

navskill.addEventListener("click", function (e) {

  let main = document.getElementById("main");
  let myskill = document.getElementById("myskill");
  let project = document.getElementById("project");
  let click = e.target;
  console.log(click)

    main.style.display ="none"
    project.style.display= "none"
    myskill.style.display="flex"
  myskill.classList.add("mskill");

myskill.classList.remove("animate__animated1")
});

let navproject = document.getElementById("nav-project");

navproject.addEventListener("click", function () {
  console.log("hi");
  let main = document.getElementById("main");
  let project = document.getElementById("project");
  let myskill = document.getElementById("myskill");


main.style.display ="none"
myskill.style.display="none"
project.style.display ="flex"

  project.classList.add("project");
  project.classList.remove("animate__animated2")
});


