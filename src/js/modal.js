let input = document.querySelector("#bank-card-input"),
            numbers = /[0-9]/,
            regExp = /[0-9]{4}/

            // добавляем слушатель события на инпут
        input.addEventListener("input",(ev)=>{
            // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
            if( ev.inputType === "insertText" && !numbers.test(ev.data) || input.value.length > 19){
                input.value = input.value.slice(0, input.value.length - 1)
                return
            }

            // обеспечиваем работу клавиш "backspace","delete"
            let value = input.value
            if( ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4)) ){
                input.value = input.value.slice(0, input.value.length - 1)
                return
            }

            // добавяем пробел после 4 цифр подряд
            if( regExp.test(value.slice(-4)) && value.length < 19){
                input.value += " "
            }
        })


       const modalCheckboxContainers = document.querySelectorAll(
  '.modal-checkbox-container'
);
const checkboxes = document.querySelectorAll('.check-input');
modalCheckboxContainers.forEach((container, index) => {
  container.addEventListener('click', () => {
    checkboxes[index].checked = !checkboxes[index].checked;
  });
  container.addEventListener('keydown', event => {
    if (event.key === ' ') {
      event.preventDefault();
      checkboxes[index].checked = !checkboxes[index].checked;
    }
  });
});