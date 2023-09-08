'use strict';

let ol = document.getElementById('issue-list');
let pagTitle = document.getElementById('page_heading');

let page = 1;
function github_issuse(pageNo){
    let URL = `https://api.github.com/repositories/1296269/issues?page=${pageNo}&per_page=5`
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        ol.innerHTML = ''
        data.forEach(element => {
            // console.log(element)
            let li = document.createElement('li');
            li.textContent = element.title;
            ol.appendChild(li)
            pagTitle.innerHTML = `Page Number ${pageNo}`
        });
    })
    .catch(err=>console.error(err));
}
github_issuse(page)

function loadPrev(){
    if(page>1){
        page--
        github_issuse(page)
    }
}

function loadNext(){
    page++
    github_issuse(page)
}


