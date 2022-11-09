let Elem = document.querySelectorAll('.input_');/* все инпуты*/
let buttonElem = document.querySelectorAll('.button_');/* все конпки справа*/
let add=document.getElementById('button_add').getAttribute('id');//добавить
let save=document.getElementById('button_save').getAttribute('id');//сохранить

document.getElementById('button_add').addEventListener("click", function(event){//при клике на кнопку ДОБАВИТЬ
  //создаем общий контейнер див - в него запишется весь элемент 2инпута+3кнопки
   let _inputALL= document.createElement("div");//создаем тег div
   _inputALL.className = 'input_';//присваиваем имя 

   //создаем два новых элемента инпута
   let _input1= document.createElement("input");//создаем тег  input1
   let _input2= document.createElement("input");//создаем тег  input2
   
   //добавл класс к инпутам- отрисовку input
   _input1.classList.add('input_new');
   _input2.classList.add('input_new');

   //создаем 3тега  botton
   let _button_arrowUpp= document.createElement("button");
   let _button_arrowDown= document.createElement("button");
   let _button_close= document.createElement("button");

   _button_arrowUpp.className = 'button_';
   _button_arrowDown.className = 'button_';
   _button_close.className = 'button_';


   //создаем 2 тега img
   let _arrowUpp_img= document.createElement("img");
   let _arrowDown_img= document.createElement("img");
   _button_close.textContent = 'Х';

    //корректировка
    _input2.style.marginLeft='4px';
    _button_arrowUpp.style.marginLeft='3px';
    _button_arrowDown.style.marginLeft='3px';
    _button_close.style.marginLeft='4px';

   _button_arrowUpp.classList.add('button_'); 
   _button_arrowDown.classList.add('button_');
   _button_close.classList.add('button_');
   _arrowUpp_img.classList.add('img_');
   _arrowDown_img.classList.add('img_');

   //Добавляем иконки
   _arrowUpp_img.src = "./img/upp.png";
   _arrowDown_img.src = "./img/down.png";

   //добавл теги в докумнент
   content.append(_inputALL);
   _inputALL.appendChild(_input1);
   _inputALL.appendChild(_input2);
   

   _inputALL.appendChild(_button_arrowUpp);
   _inputALL.appendChild(_button_arrowDown);
   _inputALL.appendChild(_button_close);

  _button_arrowUpp.appendChild(_arrowUpp_img);
  _button_arrowDown.appendChild(_arrowDown_img);


  _button_arrowUpp.onclick=function(){
    let prev_cur_input=_inputALL.previousElementSibling;//элемент выше данного
    if(prev_cur_input) prev_cur_input.before(_inputALL);

    }
  _button_arrowDown.onclick=function(){
    let next_cur_input=_inputALL.nextElementSibling;//элемент ниже данного
    if(next_cur_input) next_cur_input.after(_inputALL); // берёт #second и после него вставляет #first

  }
  _button_close.onclick=function(){
    _inputALL.remove();//убираем инпут с кнопками справа
  }

 
});

document.getElementById('button_save').addEventListener("click", function(event){//при клике на кнопку СОХРАНИТЬ
 
  let myArr=[];
  let i=0;
  document.querySelectorAll('.input_').forEach((el) => {//проходим по всем инпутам 
     
      let _input_1=el.firstChild.value;//считывааем 1ый инпут
      let _input_2=el.firstChild.nextSibling.value;//второй
      //формируем массив из значений
      myArr[i] = _input_1;
      i++;
      myArr[i] = _input_2;
      i++;
  })
  let save_ = document.createElement("p");
  let str = "{"; 
  for(let j=0;j<myArr.length;j++)
  {
    
    if(j%2){
      str += '"' + myArr[j] + '"';
      if(j!=(myArr.length-1)) str += ',';
       
    } 
    else{
      str += '"' + myArr[j] + '"' + ':';
    } 
  }
  str +="}";
  save_.innerText = str;
  document.body.appendChild(save_);
  /*
  let obj = {};
  //преобразуем массив в объект формата JSON
  //let myObj = Object.assign({}, myArr);
   myArr.forEach((elem, i) => {
      if(i<(myArr.length/2))//так как два инпута
      {
        obj[`${ myArr[i*2]}`] = `${ myArr[i*2+1]}`;//высчитываем ключ-значение
       
      }     
  })

  //Добавляем JSON объект на страницу
  let save_ = document.createElement("p");
  let str = JSON.stringify(obj); 
  save_.innerText = str;
  document.body.appendChild(save_);
*/
});