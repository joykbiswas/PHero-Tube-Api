const navbar = () => {
  const navContainer = document.getElementById("nav-container");
  const div = document.createElement("div");
  div.classList = `navbar bg-base-100 justify-between mt-10 flex-col md:flex-row `;
  div.innerHTML = `
    <div  div class="">
      <h3 class="text-3xl"><img src="./logo/Logo.png" alt=""></h3>
    </div>
    <div class="">
      <a class="btn bg-slate-400 px-4 normal-case text-2xl">Sort by view</a>
    </div>
    <div class="">
     <button class="btn bg-red-400 ">Blog</button>
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
    console.log(AllButton);


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
    <div class="card bg-base-300 shadow-xl">
    <figure>
      <img class="w-40"
        src="${data.thumbnail}"
        alt="img"
      />
    </figure>
    <div class="card-body">
      
      <div class="card-footer flex justify-between mt-8">
        <div class="flex gap-2">
          <div>
            <div class="avatar online">
              <div class="w-14 rounded-full">
                <img
                  src="${data.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>
          <div>
            <h6> ${data.authors[0].profile_name} <span>${data.authors[0].verified}</span></h6>
            <h5> ${data.others.views} views</h5>
          </div>
        </div>
      </div>
    </div>
   </div>
    `;
    cardContainer.appendChild(div)
    })
}







handleButton()




navbar();
hr();
