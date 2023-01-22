const todoBox = document.getElementById("todoBox");
const addBox = document.getElementById("addBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
let myLiTag = document.getElementsByTagName ("li");
const alertEl = document.getElementById('alert');
const ulDesign = document.getElementById ("ulDesign");


const todoArray =[] ;

const todoArrayFun = () =>{
    const divBox= document.createElement ("div");
    const myList= document.createElement ("li");
    const crossSpan= document.createElement ("SPAN");
    const txt= document.createTextNode("\u00D7");
    crossSpan.appendChild(txt);
    divBox.appendChild(myList);
    divBox.appendChild(crossSpan);
    todoList.appendChild(divBox);
    let j= todoArray.length;
    myList.innerHTML=todoArray[j-1];
    divBox.classList.add ("divDesign");
    // ulDesign.style.border=  '2px solid rgb(134, 133, 133)';
    // ulDesign.style.boxShadow ="0 0 1rem rgba(112, 109, 109, 0.15)";
    if(todoArray.length>=5){
      ulDesign.style.overflowY= "scroll";
    }
    


  for (let i in todoArray) {
    crossSpan.className="close";
    const close = document.getElementsByClassName ("close");
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }

      myList.className="confirmCrs";
      const conCrs = document.getElementsByClassName ("confirmCrs");
      conCrs[i].onclick = function(ev) {
        ev.target.classList.toggle("checked");
      }
  }
}


// crBtnDesign[0].addEventListener ("click", 
//  crBtnClick = () => {
//     todoList.style.display= none;
//  })


addBtn.addEventListener ("click", 
 btnClick = (e) => {
    e.preventDefault();
    if (addBox.value==="") {
      alertEl.innerHTML = "You should enter something!";
      alertEl.style.display = "block";
    }
    else{
      alertEl.style.display = "none";
      todoArray.push(addBox.value);
      todoArrayFun();
      console.log(todoArray);
    }
    
})







