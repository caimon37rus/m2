const addButton = document.querySelector('.add');
let List = document.querySelector('.list');
let texts = document.querySelector('.texts');
let deleteButton = document.querySelector('.delete_text');
const sortButton = document.querySelector('.sort');
const object = document.querySelector('.sort_object');
const img = document.querySelector('.sort_img');

function removeElements(del_text) {
    let textsElements = document.querySelectorAll('.texts');  //прогоняет по всем элементам созданые через добавить (texts) и удаляет. оставляя 1 
    if (textsElements.length > 1) {
        del_text.remove();
    }
}

addButton.addEventListener('click', () => {
    let newElement = document.createElement('div');           //создаёт div class="texts"  в div class=list для ввода ( новое поле ввода)
    newElement.innerHTML = texts.innerHTML;
    newElement.classList.add('texts');
    List.append(newElement);

    let deleteButton = newElement.querySelector('.delete_text');      //  удаляет новый элемент div созданный ранее 
    deleteButton.addEventListener('click', () => {
        removeElements(newElement);
    });
});

sortButton.addEventListener('click', () => {
    let arr = [];
    let inputs = document.querySelectorAll('.inp_text');                       // прогоняем по всему введеному тексту и добавляем в массив
    for (let i = 0; i < inputs.length; i++) {
        arr.push(inputs[i].value);
    }
    if (!object.style.flexDirection || object.style.flexDirection === 'column') {     //сортируем содержимое и по оси y ставим - реверс - делает в обратную сторону 
        object.style.flexDirection = 'column-reverse';
        arr.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
        for (let j = 0; j < arr.length; j++) {
            inputs[j].value = arr[j];
        }
    }
     else {
        object.style.flexDirection = 'column';
        arr.sort((a, b) => {
            if (a < b) {
                return 1;
            }
            if (a > b) {
                return -1;
            }
            return 0;
        });
        for (let j = 0; j < arr.length; j++) {
            inputs[j].value = arr[j];
        }
    }
});

img.onclick = function(){
    this.classList.toggle('sort_img')                 //переворот знак при сортировке 
  };