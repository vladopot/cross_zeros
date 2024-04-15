import CreatElem from './../../utilites/elemCreator.js';
import Controller from './../controller/controller.js';

export default class GameField {
    constructor() {
        this.player = 1;
        this.controller = new Controller();
        this.elems = [];

        const headerProperties = {
            tagName: 'div',
            classes: ['header']
        };

        this.createHeader = new CreatElem(headerProperties).returnElem();

        const tittleProp = {
            tagName: 'p',
            classes: ['tittle']
        };

        this.tittle = new CreatElem(tittleProp);
        this.tittle.addText(`Player ${this.player}`);

        const btnProp = {
            tagName: 'button',
            classes: ['btn']
        };

        this.btn = new CreatElem(btnProp);
        this.btn.addText('NewGame');
        this.btn.returnElem().addEventListener('click', () => this.mewGame());

        this.createHeader.append(this.tittle.returnElem());
        this.createHeader.append(this.btn.returnElem());
        this.elems.push(this.createHeader);

        const properties = {
            tagName: 'div',
            classes: ['wrapper']
        };

        this.createDiv = new CreatElem(properties).returnElem();
        
        for (let i = 0; i < 9; i++) {
            const ceilProperties = {
                tagName: 'div',
                classes: ['ceil', `ceil_${i}`]
            };
            const ceil = new CreatElem(ceilProperties).returnElem();
            ceil.addEventListener('click', () => this.controller.chekEvent(ceilProperties.classes[1], this.player, this));
            this.createDiv.append(ceil);
        }

        this.elems.push(this.createDiv);
        this.insert();
        this.ceils = document.querySelectorAll('.ceil');
    }

    makeCross(num) {
        const elem = document.querySelector(`.${num}`);
        if (elem.classList.contains('zero')) {
            return;
        }
        elem.classList.add('cross');
        const isWin = this.controller.chekkWinner(this.ceils, this.player);
        if (isWin) {
            return;
        }
        this.player = 2;
        this.changePlayer();
    }

    mewGame() {
        const arr = document.querySelectorAll('.ceil');
        this.controller.newGame(arr);
        this.player = 1;
        this.tittle.addText(`Player ${this.player}`);
    }

    makeZero(num) {
        const elem = document.querySelector(`.${num}`);
        if (elem.classList.contains('cross')) {
            return;
        }
        elem.classList.add('zero');
        const isWin = this.controller.chekkWinner(this.ceils, this.player);
        if (isWin) {
            return;
        }
        this.player = 1;
        this.changePlayer();
    }

    insert() {
        document.body.append(...this.elems);
    }

    changePlayer() {
        this.tittle.addText(`Player ${this.player}`);
    }
}