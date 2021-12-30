# Тестовое задание на вакансию Frontend Developer (Vue.js)

## Использованные технологии:
1) Vue.js
2) Vuex (для хранения списка с элементами, если принципиально, то могу и сделать без него)
3) SCSS

Проект собирал через vue-cli, так что все как обычно:
1) Стягиваем репозиторий (я все делал через ```yarn```)
2) ```yarn install``` / ```npm install```
3) ```yarn serve``` / ```npm run serve```

## Структура
Приложение делиться на две части: ввод и результат.  
В компонентах input вносятся изменения в состояние списка (цвета, количество, показать/скрыть), а в result компонентах отображаются все изменения (за исключением уменьшения числа квадратов по клику на любой из них).  

```Input.vue``` - основной компонент ввода, получает из хранилища список и отрисовывает компонент ```InputItem.vue```.  
```InputItem.vue``` - компонент, в котором выполняется контроль над чекбоксами и отрисовка ```InputControl.vue```.  
```InputСontrol.vue``` - компонент, к инпутам в котором привязано изменения цвета, количество квадратов и показать/скрыть список.  

```Result.vue``` - основной компонент для демонстрации результата ввода; отрисовывает ```ResultItem.vue```.  
```ResultItem.vue``` - компонент, который отрисовывает списки с элементами.

Структура списка:
```javascript
items: [
  {
    name: string,
    isActive: boolean,
    items: [
      {
        name: string,
        isActive: boolean,
        color: string,
        number: number
      }
    ]
  }
]
```

## P.S
Не делал маски для инпутов, так что если ввести отрицательное значение выдаст ошибку. Также, не выносил логику в store и делал все сразу в компонентах.

## ТЗ
Левая панель имеет список Lists с вложенными списками неких items. У каждого item есть параметры "количество"" и "цвет", которые можно менять вручную. Item помечается как выбранный с помощью чекбокса.  
Все выбранные items отображаются на правой панели в отдельном блоке для каждого List в указанном количестве в виде цветных квадратиков.  
Входные данные: 3 листа от 4 до 10 вложенных элементов (произвольно)  
Макеты для примера смотри на второй странице.  

### Требования:
 - При клике на чекбокс уровня List должны выбираться все вложенные items. Если все вложенные items уже выбраны, то снимать с них выделение. Если выбран хотя бы один item, но не все, то отображать точку в чекбоксе родительского List'a.
 - Должна быть возможность изменять параметр "количество" у items (обычного ```<input>``` достаточно, значение должно быть >= 0);
 - Должна быть возможность изменять параметр "цвет" у items (```<input type="color">```);
 - Все действия на странице должны происходить без ее перезагрузки;
 - Все изменяемые значения должны быть реактивными;
 - У каждого item изначально должны быть указаны параметры "количество"" и "цвет" по умолчанию (задать произвольно).

### Дополнительно:
 - Lists в левой панели должны сворачиваться и разворачиваться;
 - При клике на квадратик в правой панели он должен удаляться (уменьшаться параметр "количество" у соответствующего item).


### Требования по коду:
 - Задание выполнить с использованием vue.js, можно использовать css препроцессоры;
 - Код должен быть написан понятно и аккуратно, с соблюдением табуляции и прочих элементов написания, без лишних элементов и функций, не имеющих отношения к функционалу тестового задания;
 - Читабельность и наличие элементарной архитектуры;
 - Верстка должна быть выполнена без использования UI библиотек.
