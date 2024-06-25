let answer = [];
let num1 = document.querySelectorAll('input[name="num1"]');
let num2 = document.querySelectorAll('input[name="num2"]');
let num3 = document.querySelectorAll('input[name="num3"]');
let num4 = document.querySelectorAll('input[name="num4"]');
let num5 = document.querySelectorAll('input[name="num5"]');
let num6 = document.querySelectorAll('input[name="num6"]');
let startBtn = document.querySelector('#start');
let questionBox = document.querySelector('#question');
let answerBox = document.querySelector('#answerBox');
let answertTitle = document.querySelector('#resultTitle');
let call = document.querySelector('#call');
let desc = document.querySelector('#desc');
let weak = document.querySelector('#weak');
let movie = document.querySelector('#movie');

// Object Result 
const result = [
    {
        name:'sage',
        movies:'Dead Poets Society, Extraordinary Attorney Woo, Imitation Game, To Kill A Mockingbird',
        call: 'The Smart One, The Informative One, Trusted Source',
        desc : 'You are all about appearing credible and trusted. You love sharing what you know to the audience in almost a guiding way, wanting them to be wiser in choosing brands (while hinting at yourself as the most trusted brand)',
        weakness:'Need thorough research, might appear too opinionated on some topics'
    },
    {
        name:'creator',
        movies:'The Founder, Oppenheimer, Celebrity, Cruella',
        call: 'The Innovative One, The Trendsetter',
        desc : 'You have a creative mind to create something out of the slightest potential. If it can be imagined, you will surely try to create that. Due to your never-ending innovation, your ‘brand’ is deemed a visionary by the audience.',
        weakness:'The looming threat of failed innovation might break you down'
    },
    {
        name:'outlaw',
        movies:'John Wick, Hunger Games, Mad Max, Mencuri Raden Saleh',
        call: 'The Rule Breaker, The Freethinker, The Fearless One',
        desc : 'You don’t feel the need to conform to the norm and love to challenge the status quo. Your ‘brand’ is an agent of change, eager to prove what they believe in. You don’t seek to please all people, but it’s okay as long as your ‘brand’ can ignite fire within your audience.',
        weakness:'Might cross a line and be seen in a negative way'
    },
    {
        name:'ruler',
        movies:' Lord of the Rings, Game of Thrones, Search: WWW, Black Panther',
        call: 'The Leader, The Controller',
        desc : 'You are a dominant force within the field. Your ‘brand’ stands out from the rest with utter confidence in its expertise, and aims for the ultimate success. Others look up to you and how you refuse to back down from pressure and challenge.',
        weakness:'Might appear too proud and arrogant, more difficulty in relating to common people'
    }
]



function startQuiz() {
    questionBox.classList.remove('hidden');
    questionBox.scrollIntoView({behavior:"smooth"});
    // startBtn.parentNode.parentNode.parentNode.classList.add('hidden');
}

function checking (item) {
        if (item.checked) {
            answer.push(item.value)
        }
}

function findAnswer() {

    num1.forEach(checking);
    num2.forEach(checking);
    num3.forEach(checking);
    num4.forEach(checking);
    num5.forEach(checking);
    num6.forEach(checking);

    console.log(answer);

    const reps = answer.reduce((accum, item) => {
        const newCount = (accum[item] || 0) + 1;
        return { ...accum, [item]: newCount };
      }, {});
      const maxTimes = Math.max.apply(null, Object.values(reps));
      const recordItems = Object.entries(reps)
        .filter(([, val]) => val === maxTimes)
        .map(([key, val]) => key);
      
      if (recordItems.length == 2) {
        recordItems.pop();
        recordItems.pop();
        recordItems.push('ruler');
      } else if (recordItems.length > 2) {
        recordItems.pop();
        recordItems.pop();
        recordItems.pop();
        recordItems.push('ruler');
      }

    //   alert(recordItems.join(', ') + " ( " + maxTimes +" times ) ");
    result.forEach(function search(item){
        if(item.name === recordItems[0]){
            movie.innerHTML = item.movies
            call.innerHTML = item.call
            desc.innerHTML = item.desc
            weak.innerHTML = item.weakness
        }
    })

        answertTitle.innerHTML = recordItems;
        answerBox.classList.remove('hidden');
        answerBox.scrollIntoView({behavior:"smooth"});
}