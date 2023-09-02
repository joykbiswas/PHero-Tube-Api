
const blogBtn = document.getElementById('blogBtn');
const sortBtn = document.getElementById('sortBtn');

window.addEventListener("load", (event) => {
  handleLoadData(1000);

});

const hr=()=>{
    const lineHr =document.getElementById('line')
    const div =document.createElement('div')
    div.classList =`w-11/12 mx-auto `
    div.innerHTML=`<hr>`
    lineHr.appendChild(div)
}

const handleButton = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json()
    const AllButton = data.data
   

    
    const buttonContainer= document.getElementById('button-container')
    AllButton.forEach((button)=>{
    const div =document.createElement('div');
    div.innerHTML=`
     <button onclick=handleLoadData('${button.category_id}')  class="btn mx-4 my-3 bg-red-300 ">${button.category}</button>
    `;
    buttonContainer.appendChild(div)
   })

}
  

const handleSort = async (id) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
  const data = await res.json()
  const mainData = data.data


 const sortedData =
 mainData.sort(function(a, b) {
  var viewsA = parseFloat(a.others.views.split('K')[0]);
  var viewsB = parseFloat(b.others.views.split('K')[0]);

  if (viewsA < viewsB) {
    return -1;
  } else if (viewsA > viewsB) {
    return 1;
  } else {
    return 0;
  }})


  const cardContainer = document.getElementById('card-container')
  cardContainer.innerHTML= ''
 if(sortedData.length >0){
  sortedData.forEach((data)=>{
    
 const shortData = data.others.views;  
 
 const div = document.createElement('div')
 const postedDate = data.others.posted_date;
 const hrs = Math.floor(postedDate / 3600);
 const min = Math.floor((postedDate % 3600) / 60);

div.innerHTML=`
<div class="card  bg-base-100 shadow-xl">
<div>
<figure><img class="h-48 " src="${data.thumbnail}" alt="img" /></figure>
 
<h3 class="w-32 -mt-12 md:-mt-8 ml-2 pl-2 bg-slate-700 text-white text-sm ">${postedDate ? `${hrs} hr ${min} min` : ''}</h3>
</div>


<div class="card-body flex flex-row  p-3 mt-2">
  <div class="avatar ">
     <div class="w-14 h-14 rounded-full">
      <img class="" src="${data.authors[0].profile_picture}">
     </div>
  </div>
  <div>
  <h2 class="text-base lg:text-sm">${data.title }</h2>
  <h2 class="card-title text-base font-normal gap-0"> ${data.authors[0].profile_name}   <span><img src="./logo/fi_10629607.svg" ${data.authors[0].verified ? "" : "hidden"}></span>
  </h2>
  <p class="text-base">${data.others.views} views</p>
    </div>

  </div>
  
</div>
</div>
`;
cardContainer.appendChild(div)
})

 }else{

  const cardContainer = document.getElementById('card-container') ;

  
  cardContainer.innerHTML=`
     <div class=" w-full m-auto  ">
     <img class="w-40 m-auto" src="./logo/Icon.png" alt="img" />
     <h3 class="text-xl text-center">Oops!! Sorry, There is <br> no content here</h3>
     </div>
    `
 }


}

sortBtn.addEventListener('click', () => {
 
  handleSort(1000)
   
})

const handleLoadData = async (id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    const cardData = data.data
    
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML= ''
   if(cardData.length >0){
    cardData.forEach((data)=>{
      
   const shortData = data.others.views;  
   

   const div = document.createElement('div')
   const postedDate = data.others.posted_date;
   const hrs = Math.floor(postedDate / 3600);
   const min = Math.floor((postedDate % 3600) / 60);

  div.innerHTML=`
  <div class="card  bg-base-100 shadow-xl">
  <div class="mb-6 ">
  <figure><img class="h-48 " src="${data.thumbnail}" alt="img" /></figure>
   
  <h3 class="w-32 -mt-12 md:-mt-8 ml-2 pl-2 bg-slate-700 text-white text-sm ">${postedDate ? `${hrs} hr ${min} min` : ''}</h3>
  </div>


  <div class="card-body flex flex-row p-3 mt-2">
    <div class="avatar ">
       <div class="w-14 h-14 rounded-full">
        <img class="" src="${data.authors[0].profile_picture}">
       </div>
    </div>
    <div>
    <h2 class="text-base lg:text-sm">${data.title }</h2>
    <h2 class="card-title text-base font-normal gap-0"> ${data.authors[0].profile_name}   <span><img src="./logo/fi_10629607.svg" ${data.authors[0].verified ? "" : "hidden"}></span>
    </h2>
    <p class="text-base">${data.others.views} views</p>
      </div>
  
    </div>
    
  </div>
</div>
  `;
  cardContainer.appendChild(div)
  })

   }else{

    const cardContainer = document.getElementById('card-container')
    cardContainer.classList.remove("grid")
  
    cardContainer.innerHTML=`
       <div class=" w-full m-auto  ">
       <img class="w-40 m-auto" src="./logo/Icon.png" alt="img" />
       <h3 class="text-xl text-center">Oops!! Sorry, There is <br> no content here</h3>
       </div>
      `
   }

}

blogBtn.addEventListener('click',()=>{
  my_modal_3();
})

const my_modal_3=() =>{
  const accordionContainer = document.getElementById('accordion-container')
  accordionContainer.innerHTML= ''
  const div =document.createElement('div')
  div.innerHTML=`
  <dialog id="my_modal_3" class="modal">
  <form method="dialog" class="modal-box  w-11/12 max-w-5xl">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button><br>

    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" checked="checked" /> 
      <div class="collapse-title text-xl font-medium">
      Discuss the scope of var, let, and const 
      </div>
      <div class="collapse-content"> 
        <p><span class="text-lg ">Var:</span> Variables declared with the var keyword have a function scope.The var keyword is used to declare a variable in JavaScript. Variables are containers for storing information. They can be used to store numbers, strings, objects, and other types of data.</p><br>
        
        <p><span class="text-lg ">Let:</span> Variables declared with the let keyword have a block scope. This means that they are only accessible from within the block in which they are declared. It was introduced in the ES6 standard</p><br>
        <p><span class="text-lg ">Const:</span> 
         The const keyword is used to declare a constant variable in JavaScript. Variables declared with the const keyword also have a block scope. However, they cannot be re-assigned once they are declared.It introduced in the ES6 standard</p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" /> 
      <div class="collapse-title text-xl font-medium">
      Tell us the use cases of null and undefined 
      </div>
      <div class="collapse-content"> 
        <p><span class="text-lg ">Null:</span> Null is a literal value that can be assigned to a variable .A variable is assigned the value of null, it means that the variable has no value. It is often used to represent the intentional absence of a value, such as when a variable is set to null to indicate that the value is not known.</p> <br>
        <p><span class="text-lg ">Undefined:</span>   Undefined is a keyword that is used to represent the absence of a value in a variable that has not been assigned a value. A variable is declared but has not been assigned a value, its value is undefined.It is often used to represent the unintentional absence of a value</p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" /> 
      <div class="collapse-title text-xl font-medium">
      What do you mean by REST API?
      </div>
      <div class="collapse-content"> 
        <p><span class="text-lg ">REST API:</span> REST API stands for Representational State Transfer Application Programming Interface. It is a set of architectural constraints for designing and developing web services. REST API is identified by a URI. It can be manipulated using HTTP methods, such as GET, POST, PUT, and DELETE. examples of REST APIs using  get information about geographical locations,get weather information,interact with browser, Compute Engine, Cloud Storage, and Cloud SQL. These benefits make REST APIs a popular choice for developing web services and other applications that need to be able to communicate with other systems.</p>
      </div>
    </div>
  </form>
 </dialog>
  `
  
  accordionContainer.appendChild(div);
  const modal = document.getElementById('my_modal_3')
  modal.showModal()
}



handleButton()

hr();
