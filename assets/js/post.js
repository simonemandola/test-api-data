export function post() {

    const POST_SELECTED = window.localStorage.getItem('post-number');
    const API_POST = "https://jsonplaceholder.typicode.com/posts/";
    const API_COMMENT = "https://jsonplaceholder.typicode.com/comments?postId=";
    const URI = API_POST + POST_SELECTED;
    const URI_COMMENT = API_COMMENT + POST_SELECTED;
    const POST_TITLE = document.querySelector('#postTitle');
    const POST_BODY = document.querySelector('#postBody');
    let COMMENTS_CONT = document.querySelector('#commentsCont');

    window.addEventListener("load", ()=> {
        // Get Post title and body
        fetch(URI)
            .then(post => post.json())
            .then(post => {
                POST_TITLE.innerHTML = post.title.toUpperCase();
                POST_BODY.innerHTML = post.body;
            })
            .catch(error => console.log(error));

        // Get Post comment
        fetch(URI_COMMENT)
            .then(comments => comments.json())
            .then(comments => {
                for (let i = 0; i < comments.length; i++) {
                    let newComment = document.createElement('div');
                    newComment.innerHTML = `
                   
                        <h4 class="title-h4">${comments[i].email}</h4>
                        <p class="text-s">${comments[i].body}</p>
                   
                    `;
                    newComment.className = 'comment';
                    COMMENTS_CONT.appendChild(newComment);
                }
            })
            .catch(error => console.log(error));
    });

}