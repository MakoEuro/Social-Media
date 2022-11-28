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

const input = select('.input');
const file = select('.file');
const send = select('.send');

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

