export default class Controller {
    checkMap = [
        [0,1,2],
        [0,4,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ];
    constructor() {
        if (!Controller.instance) {
            Controller.instance = this;
        }

        return Controller.instance;
    }

    chekEvent(num, player, view) {
        if (player === 1) {
            view.makeCross(num);
        } else {
            view.makeZero(num);
        }
    }

    chekkWinner(ceilsArr, player) {
        for (let i = 0; i < this.checkMap.length; i++) {
            if (ceilsArr[this.checkMap[i][0]].classList.contains('cross') 
            && ceilsArr[this.checkMap[i][1]].classList.contains('cross') 
            && ceilsArr[this.checkMap[i][2]].classList.contains('cross')) {
                alert(`Player ${player} won!!!`);
                return true;
            } else if (ceilsArr[this.checkMap[i][0]].classList.contains('zero') 
            && ceilsArr[this.checkMap[i][1]].classList.contains('zero')
            && ceilsArr[this.checkMap[i][2]].classList.contains('zero')) {
                alert(`Player ${player} won!!!`);
                return true;
            }
        }
    }

    newGame(arr) {
        arr.forEach(element => {
            if (element.classList.contains('zero')) {
                element.classList.remove('zero');
            } else if (element.classList.contains('cross')) {
                element.classList.remove('cross');
            }
        });
        return arr;
    }
}