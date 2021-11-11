export function getPosts() {

    const POSTS_CONT = document.querySelector('#postCont');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(posts => posts.json())
        .then(posts => {
            for (let i = 0; i < posts.length; i++) {
                let article = document.createElement('article');
                article.innerHTML = `
                       <div class="post-title-container">
                            <h1 class="post-title">${posts[i].title}</h1>
                       </div>
                       <div class="post-exc-container">
                            <p class="post-exc">${posts[i].body}</p>
                       </div>
                       <a href="./post.html" class="btn btn-post" id="${posts[i].id}">Leer más →</a>
                    `;
                article.className = 'post';
                POSTS_CONT.appendChild(article);
            }
            const BTN_POST = document.querySelectorAll('.btn-post');
            for (let i = 0; i < BTN_POST.length; i++) {
                BTN_POST[i].addEventListener("click", ()=>{
                    window.localStorage.setItem('post-number', BTN_POST[i].id);
                });
            }
        })
        .catch(error => console.log(error));
}