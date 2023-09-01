const navbar = () => {
  const navContainer = document.getElementById("nav-container");
  const div = document.createElement("div");
  div.classList = `navbar bg-base-100 justify-between mt-10 flex-col md:flex-row `;
  div.innerHTML = `
    <div  div class="">
      <h3 class="text-3xl"><img src="./logo/Logo.png" alt=""></h3>
    </div>
    <div class="">
      <a onclick="" id='short-views' class="btn bg-slate-400 px-4 normal-case text-2xl">Sort by view</a>
    </div>
    <div class="">
     <button onclick="my_modal_3()" class="btn bg-red-400 ">Blog</button>
    </div>
    
    `;
    navContainer.appendChild(div)
    
};
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
    // console.log(AllButton);


    const buttonContainer= document.getElementById('button-container')
    AllButton.forEach((button)=>{
    const div =document.createElement('div');
    div.innerHTML=`
     <button onclick=handleLoadData('${button.category_id}') class="btn mx-4 my-3 bg-slate-300">${button.category}</button>
    `;
    buttonContainer.appendChild(div)
   })
}
const handleLoadData = async (id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    const cardData = data.data
    console.log(cardData);
     
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML= ''
    cardData.forEach((data)=>{
        console.log(data);
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="card  bg-base-100 shadow-xl">
    <figure><img class="h-48" src="${data.thumbnail}" alt="img" /></figure>
    <div class="card-body flex flex-row">
      <div class="avatar ">
         <div class="w-14 h-14 rounded-full">
          <img class="" src="${data.authors[0].profile_picture}">
         </div>
      </div>
      <div>
      <h2 class="card-title"> ${data.authors[0].profile_name}   <span><img src="./logo/fi_10629607.svg" ${data.authors[0].verified ? "" : "hidden"}></span>
      </h2>
      <p>${data.others.views} views</p>
        </div>
    
      </div>
      
    </div>
  </div>
    `;
    cardContainer.appendChild(div)
    })


}

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
        <p>hello1</p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" /> 
      <div class="collapse-title text-xl font-medium">
      Tell us the use cases of null and undefined 
      </div>
      <div class="collapse-content"> 
        <p>hello2</p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" /> 
      <div class="collapse-title text-xl font-medium">
      What do you mean by REST API?
      </div>
      <div class="collapse-content"> 
        <p>hello3</p>
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




navbar();
hr();
