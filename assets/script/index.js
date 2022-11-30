'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

// Selectors
const user = select('.user');

const input = select('.input');
const file = select('.file');
const send = select('.send');

const newPosts = select('.wrapper');
const text = select('.text');

// Class
class User {
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get userName() {
        return this.#userName
    }

    get email() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.#email)) {
            return true;
        }
        // Error for invalid email
        console.log("Invalid email, use 'example@mail.com' to register");
        return false;
    }
}

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        // Allows for usage inside this class
        super(id, name, userName, email);

        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }
}

function dateTime() {
    // Generates names instead of numbers
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    // New date
    const date = new Date();

    // Day and Year
    const day = date.getDate();
    const year = date.getFullYear();

    let newDate = `${monthNames[date.getMonth()]} ${day}, ${year}`;
    return newDate;
}

let newUser = new User('00001', 'Bob Jones', 'Bobblehead', 'BobBobble@mail.com');

onEvent('click', send, function () {
    let inputVal = input.value;

    if(inputVal !== '') {
        let element = document.createElement('div');
    
        newPosts.prepend(element);
        element.classList.add('newPost');

        let userImg = document.createElement('div');
        userImg.classList.add('userImage');
        userImg.classList.add('header-post');
        userImg.style.float = 'left';
        element.appendChild(userImg);
            
        let nameOfUser = document.createElement('h3');
        nameOfUser.innerText = `Bob Jones`;
        nameOfUser.classList.add('header-post');
        nameOfUser.style.lineHeight = '40px';
        element.appendChild(nameOfUser);

        let date = document.createElement('p');
        date.innerText = dateTime();
        date.classList.add('header-post');
        date.style.float = 'right';
        date.style.lineHeight = '40px';
        element.appendChild(date);

        let postText = document.createElement('p');
        postText.innerText = `${inputVal}`;
        element.appendChild(postText);
        
        // Clears text for post
        input.value = '';
    } else {
        console.log('Input text before pressing send');
    }
});