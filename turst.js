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
   