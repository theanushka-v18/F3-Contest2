const btn = document.querySelector('#btn');
const postsH  = document.querySelector("#postsH");
const productsH = document.querySelector("#productsH");
const todosH = document.querySelector("#todosH");
const postsTable = document.querySelector('#posts');
const productsTable = document.querySelector('#products');
const todosTable = document.querySelector('#todos');

function promise1() {
    return fetch("https://dummyjson.com/posts");
}
function promise2() {
    return fetch("https://dummyjson.com/products");
}
function promise3() {
    return fetch(" https://dummyjson.com/todos");
}

function  createRowPosts(post) {
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    tdId.innerHTML = "Id : " + post.id;
    let tdTitle = document.createElement('td');
    tdTitle.innerHTML = "Title : " + post.title;
    let tdBody = document.createElement('td');
    tdBody.innerHTML = "Body : " + post.body;
    let tdReactions = document.createElement('td');
    tdReactions.innerHTML = "Reaction : " + post.reactions;

    tr.appendChild(tdId);
    tr.appendChild(tdTitle);
    tr.appendChild(tdBody);
    tr.appendChild(tdReactions);

    postsTable.appendChild(tr);
}

function createRowProducts(product) {
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    tdId.innerHTML = "Id : " + product.id;
    let tdTitle = document.createElement('td');
    tdTitle.innerHTML = "Title : " + product.title;
    let tdDesc = document.createElement('td');
    tdDesc.innerHTML = "Description : " + product.description;
    let tdPrice = document.createElement('td');
    tdPrice.innerHTML = "Price : " + product.price;
    let tdDiscPercentage = document.createElement('td');
    tdDiscPercentage.innerHTML = "Discount Percentage : " + product.discountPercentage;

    tr.appendChild(tdId);
    tr.appendChild(tdTitle);
    tr.appendChild(tdDesc);
    tr.appendChild(tdPrice);
    tr.appendChild(tdDiscPercentage);

    productsTable.appendChild(tr);
}

function  createRowTodos(todo) {
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    tdId.innerHTML = "Id : " + todo.id;
    let tdTodo = document.createElement('td');
    tdTodo.innerHTML = "Todo : " + todo.todo;
    let tdCompleted = document.createElement('td');
    tdCompleted.innerHTML = "Completed : " + todo.completed;
    let tdUserId = document.createElement('td');
    tdUserId.innerHTML = "User Id : " + todo.userId;

    tr.appendChild(tdId);
    tr.appendChild(tdTodo);
    tr.appendChild(tdCompleted);
    tr.appendChild(tdUserId);

    todosTable.appendChild(tr);
}

btn.addEventListener("click", ()=> {
    promise1().then((response) => {
        return response.json()
    }).then(value => {
        setTimeout(() => {
            let postsArr = value.posts;
            postsH.innerHTML = "POSTS";
            postsArr.forEach(post => {
                createRowPosts(post);
            });
        }, 1000);
    })

    promise2().then((response) => {
        return response.json()
    }).then(value => {
        setTimeout(() => {
            let productsArr = value.products;
            productsH.innerHTML = "PRODUCTS";
            productsArr.forEach(product => {
                createRowProducts(product);
            });
        }, 2000);
    })

    promise3().then((response) => {
        return response.json()
    }).then(value => {
        setTimeout(() => {
            let todosArr = value.todos;
            todosH.innerHTML = "TODOS";
            todosArr.forEach(todo => {
                createRowTodos(todo);
                console.log(todo);
            });
        }, 3000);
    })
})