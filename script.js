async function foo(){
    try{
    var res = await fetch('https://www.anapioficeandfire.com/api/books');
    var res1 = await res.json();
    console.log(res1);
        function foo(res1){
        for(i=0;i<res1.length;i++){
            //console.log(foo(res1[i].name,res1[i].isbn));
            var div=document.createElement("div");
            div.innerHTML= `<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
            <div class="card-header">${res1[i].name}</div>
            <div class="card-body">
              <h5 class="card-title">${res1[i].authors}</h5>
            </div>
          </div>`;
       
       document.body.append(div);
        } 
    }
}catch (error) {
    console.log(error);
  }
}
//foo();
var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
container.append(row);


var res=fetch("https://www.anapioficeandfire.com/api/books");
res.then((data)=>data.json()).then((data1)=>foo(data1));
function foo(data1){
    for(i=0;i<data1.length;i++){
        //var div=document.createElement("div");
        row.innerHTML+= `<div class="col-md-4">
        <div class="card border-danger mb-3" style="max-width: 18rem;">
        <div class="card-header"><strong>${data1[i].name}</strong></div>
        <div class="card-body text-danger">
          <h5 class="card-title">Author:${data1[i].authors}</h5>
          <h5 class="card-title">ISBN:${data1[i].isbn}</h5>
          <h5 class="card-title">NO.OF.PG:${data1[i].numberOfPages}</h5>
          <p>PUBLISHER:${data1[i].publisher}</p>
          <p>RELEASED DATE:${data1[i].released}</p>
        </div>
        </div>
      </div>`;
      document.body.append(container);
        //console.log(data1[i].name,data1[i].isbn,data1[i].authors,data1[i].numberOfPages);
    }
}
//.catch((error)=>console.log(error));


/*const ul = document.querySelector('ul');
let allPages = 15;

function elem(allPages, page){
    let li = '';

    let beforePages = page - 1;
    let afterPages = page + 1;
    let liActive;

    if(page > 1){
        li += `<li class="btn" onclick="elem(allPages, ${page-1})" ><i class="fas fa-angle-left"></i></li>`;
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){

        if(pageLength > allPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1;
        }

        if(page == pageLength){
            liActive = 'active';
        }else{
            liActive = '';
        }

        li += `<li class="numb ${liActive}" onclick="elem(allPages, ${pageLength})" ><span>${pageLength}</span></li>`
    }

    if(page < allPages){
        li += `<li class="btn" onclick="elem(allPages, ${page+1})" ><i class="fas fa-angle-right"></i></li>`;
    }

    ul.innerHTML = li;
}
elem(allPages, 2);*/