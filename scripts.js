var bill = document.querySelector(".billamount");
var cashg = document.querySelector(".cash");
const nextbutton = document.querySelector(".btn1");
const sec2 = document.querySelector(".section2");
const errormsg1 = document.querySelector("#error1");
const notestable = document.querySelector("#notestable");
const gif = document.querySelector("#plateswash-gif");
const errormsg2 = document.querySelector("#error2");
const checkbtn = document.querySelector(".btn2");
const resetbtn = document.querySelector(".btn3");
const numberOfNotes = document.querySelectorAll(".no-of-notes");
var notesDdenominations = [2000,500,100,50,20,10,5,1];



sec2.style.display = "none";
notestable.style.display = "none";
gif.style.display = "none";


nextbutton.addEventListener("click", function validation(){
  if(bill.value<=0)
  {
    errormsg1.innerText = "The bill amount is invalid !! Please enter am amount greater than zero";
  }
  else{
    sec2.style.display = "block";
  }
});


checkbtn.addEventListener("click",()=>{
  const amounttoreturn = cashg.value-bill.value;
  console.log(cashg.value);
  console.log(bill.value);
  console.log(amounttoreturn);
  if(Number(cashg.value)<Number(bill.value))
  {
    gif.style.display = "block";
    errormsg2.innerText = "I guess you will have to wash plates";
  }
  else if(cashg.value===bill.value)
  {
    errormsg2.innerText = "No change to return";
  }
  else{
    
     calculatechange(amounttoreturn);
     notestable.style.display  = "block";
  }
});



function calculatechange(amounttoreturn)
{
  for(let i=0;i<notesDdenominations.length;i++)
  {
    const noofnotes = Math.trunc(amounttoreturn/notesDdenominations[i]);
    amounttoreturn%=notesDdenominations[i];
    numberOfNotes[i].innerText = noofnotes; 

    
  }
}

