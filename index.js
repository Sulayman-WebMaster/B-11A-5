const viewAnotherPage = document.getElementById('viewAnotherPage');
viewAnotherPage.addEventListener('click', () => {
    window.location.href = 'blog.html'
    });
const todayDate = new Date();
const allCards = document.querySelectorAll('.task-chacker');
const taskNumbers = document.getElementById('taskNumber');
const navNumber = document.getElementById('navNumber');
const sideBar = document.getElementById('sidebar');

    

    

let howManyClicked = 0;
const allCardsItems = allCards.length;
for (let card of allCards) {
    card.addEventListener('click', (e) => {
        taskNumbers.innerText = Math.max(0, parseInt(taskNumbers.innerText) - 1).toString().padStart(2, '0');
        navNumber.innerText =  Math.max(0, parseInt(navNumber.innerText) + 1);
        
        card.disabled = true;
        card.classList.add('bg-gray-300');
        
        alert('Board updated Successfully');
        howManyClicked++;

        if(howManyClicked === allCardsItems) {
            alert('congrats! you have conpleted all the current task');
        }
        

        const twentyFourClockHour = todayDate.getHours();
        const currentHour = twentyFourClockHour % 12 || 12;
        const currentMinute = todayDate.getMinutes();   
        const currentSecond = todayDate.getSeconds();
        const prefixer = currentHour >= 12 ? 'PM' : 'AM';
        const whatIsTheTime = `${currentHour}:${currentMinute}:${currentSecond} ${prefixer}`; 

        const theTitle = e.target.parentElement.parentElement.querySelector('.title').textContent;
        
        
        const newSideItem = document.createElement('div');
        newSideItem.textContent = `You have Complete The Task ${theTitle} at ${whatIsTheTime} `;
        newSideItem.classList.add('rounded-lg', 'bg-[var(--primary-color)]', 'p-3');
        sideBar.appendChild(newSideItem);

        

        


        
    
    });
}



const clearHistory = document.getElementById('clear-history');
 clearHistory.addEventListener('click', () => {
    sideBar.innerHTML = '';
    
 });
 function colorGenerator() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
 }
 const body = document.getElementById('bg-color-changer');
 const colorChangetBtn = document.getElementById('color-changer');
 colorChangetBtn.addEventListener('click', () => {
    newColor = colorGenerator();
    body.style.backgroundColor = newColor;
 });

const todaysDate = document.getElementById('todays-date');
const datetimer = document.getElementById('datetimer');
const date = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weekDay = weekDays[date.getDay()];
const day = date.getDate();
const month = months[date.getMonth()];  
const year = date.getFullYear();
const todaysDateFormet = `${month} ${day} ${year}`;
todaysDate.textContent = todaysDateFormet;
datetimer.textContent = `${weekDay} ,`;
  
