import BASE_URL from "./api/constant.js"
import { endpoints } from "./api/constant.js"

const row = document.querySelector('.row')
let product = null;


async function getAllData(endpoint) {
    try {
        const res = await axios(`${BASE_URL}/${endpoint}`)
        product = res.data
        BlogCards(product)
        console.log(product);
        
    } catch (error) {
        
    }
}

function BlogCards(array){
    row.innerHTML=``
    array.forEach(element => {
        row.innerHTML +=
        `
        <div class="col-4 card">
                        <h1>${element.body.charAt(0).toUpperCase() + element.body.slice(1)}</h1>
                        <h3>${element.title.charAt(0).toUpperCase() + element.title.slice(1)}...<a href="details.html" class="read-more" data-id = ${element.id}>Read More</a></h3>
                        <p>written by ${element.author}</p>
                        <div class="card-btns">
                            <button class="delete" data-id=${element.id}>Delete</button>
                            <button class="edit" data-id=${element.id}>Edit</button>
                        </div>
                    </div>
        `
    });
}

getAllData(endpoints.blogs)


