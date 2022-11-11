class Card {
    constructor(doctor, , ) {
        this.title = title;
        this.body = body;
        this.username = username;
        this.name = name;
        this.email = email;
        this.container = document.createElement('div');
        this.deleteButton = document.createElement("button");
        this.id = id;
        this.userId = userId;
    }

    createElements() {
        this.container.insertAdjacentHTML('beforeend', `<h1 class="post_name">${this.username}</h1><h3 class="post_name">${this.name}</h3><p class="post_email">${this.email}</p><h4 class="post_title">${this.title}</h4> <p class="post_body">${this.body}</p>`);
        this.container.className = `post`;
        document.body.append(this.container);
        this.deleteButton.innerHTML = "Delete";
        this.container.append(this.deleteButton);
        this.deleteButton.addEventListener("click", () => {
            deletePost(this.id, this.container )
        })
    }
}

