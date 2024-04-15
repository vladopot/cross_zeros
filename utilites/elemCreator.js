export default class CreatElem {
    elem = null;

    constructor(prop) {
        this.tagName = prop.tagName;
        this.classes = prop.classes;
        this.creator();
    }

    creator() {
        const elem = document.createElement(this.tagName);
        this.elem = elem;
        this.addClass();
    }

    addClass() {
        this.elem.classList.add(...this.classes);
    }

    addText(text) {
        this.elem.innerHTML = text;
    }

    returnElem() {
        return this.elem;
    }
}