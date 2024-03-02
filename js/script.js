
const loadPhoneApiData = async(id) => {
    const api = await fetch(` https://openapi.programming-hero.com/api/phones?search=${id}`)
    const convertJosn = await api.json();
    const phone =convertJosn.data;
   displayEveryPhone(phone)
};

const displayEveryPhone=(phones) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="${phone.image} " />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone. phone_name}</h2>
    <p>There are many variations of passages of available, but the majority have suffered</p>
    <div class="card-actions">
      <button  onclick="showDetails('${phone.slug
      }')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>    
        `;
  phoneContainer.appendChild(div)
    });
}

const handleSearchBar = () => {
    const inputText = document.getElementById('input-field');
    const inputValue = inputText.value ;
    if(inputValue){
        loadPhoneApiData(inputValue)
    }else{
        alert('hey bro or lady please enter some text search bar')
    }
    inputText.value = '' ;
}

const showDetails = async(id) => {
const api = await fetch(`https://openapi.programming-hero.com/api/phone/${id} `) ;
const jsonFormat = await api.json();
displayModal(jsonFormat);
}

const displayModal = (datas) =>{
    const data = datas.data
const modalContainer = document.getElementById('my_modal_4')
modalContainer.innerHTML = `
<div class="modal-box w-11/12 max-w-5xl">
<div class=" p-8 flex justify-center "> <img src="${data.image} " > </div>
<div class=" ml-10">
<h2 class = " text-2xl font-bold">${data.name} </h2>
<h2> <span class="text-xl font-bold">Storage: </span> ${data.mainFeatures
.storage} </h2>
<h2> <span class="text-xl font-bold">Display Size:</span> ${data.mainFeatures
    .displaySize} </h2>
<h2> <span class="text-xl font-bold">ChipSet :</span>${data.mainFeatures
    .chipSet} </h2>
<h2> <span class="text-xl font-bold">Memory :</span> ${data.mainFeatures
    .memory} </h2>
<h2> <span class="text-xl font-bold">Slug :</span> ${data.slug} </h2>
<h2>  <span class="text-xl font-bold">Released : </span> ${data.releaseDate} </h2>
<h2> <span class="text-xl font-bold">GPS:</span> ${data.others?.GPS } </h2>

</div>

<div class="modal-action flex justify-center">
  <form method="dialog">
    <button class="btn">Close</button>
  </form>
</div>
</div>
`;
console.log(datas)
    my_modal_4.showModal()
} 

loadPhoneApiData('iphone')