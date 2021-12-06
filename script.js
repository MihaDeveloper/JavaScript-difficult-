'use strict';
const week = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
const day = document.querySelector('.days');
const today = new Date();

const days = () => {
   week.forEach((item, i) => {
      const div = document.createElement('div'); 
      if (i === +today.getDay() -1) {
        div.textContent = week[i]; 
         div.classList.add('today');        
      }
      if (item == 'Суббота' || item == 'Воскресенье') { 
         div.textContent = week[i]; 
         div.classList.add('italic');
      } else {
         div.textContent = week[i]; 
      }
      day.appendChild(div); 
   });
};
days(); 