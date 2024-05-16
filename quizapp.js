const questions = [{
    'que': 'which of the following is a markup language?',
    'a': 'HTML',
    'b':'css',
    'c': 'javascript',
    'd':'PHP',
    'correct': 'a'
},
{
    'que': 'what year was javascript launched?',
    'a': '1996',
    'b':'1995',
    'c': '1994',
    'd':'none of the above',
    'correct': 'b'
},
{
    'que': 'what does css stand for?',
    'a': 'Hypertext markup language',
    'b':'cascading style sheet',
    'c': 'jason object notation',
    'd':'helicopter terminals motarboats lamborginis',
    'correct': 'b',
},
{
    'que': 'what does js stand for?',
    'a': 'java logicalscript',
    'b':'json script',
    'c': 'java script',
    'd':'none of the above',
    'correct': 'c',
},
{
    'que': 'what year was HTML launched?',
    'a': '1991',
    'b':'2001',
    'c': '1999',
    'd':'2004',
    'correct': 'a',
},
{
    'que': 'what does css stand for?',
    'a': 'Cading style sheet',
    'b':'Cascading Style Sheet',
    'c': 'cascas style sheet',
    'd':'none of the above',
    'correct': 'b',
},
{
    'que': 'Bootstrap is a library of?',
    'a': 'React',
    'b':'css',
    'c': 'javascript',
    'd':'HTML',
    'correct': 'd',
},
{
    'que': 'Tailwind is a library of?',
    'a': 'HTML',
    'b':'css',
    'c': 'Node js',
    'd':'Rust',
    'correct': 'b',
},
{
    'que': ' What year was React launched?',
    'a': '2009',
    'b':'2003',
    'c': '2013',
    'd':'2004',
    'correct': 'c',
},
{
    'que': 'which programming is prefferd more in the world?',
    'a': 'Python',
    'b':'java',
    'c': 'javascript',
    'd':'c#',
    'correct': 'a',
}
]


let index = 0;
let total = questions.length;
let right = 0;
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () => {
    if(index === total) {
        return endQuiz()
    }
    reset()
const data = questions[index]
quesBox.innerText = ` ${index + 1}) ${data.que}`;
optionInputs[0].nextElementSibling.innerText = data.a;
optionInputs[1].nextElementSibling.innerText = data.b;
optionInputs[2].nextElementSibling.innerText = data.c;
optionInputs[3].nextElementSibling.innerText = data.d;
optionInputs[4].nextElementSibling.innerText = data.d;
optionInputs[5].nextElementSibling.innerText = data.d;
optionInputs[6].nextElementSibling.innerText = data.d;
optionInputs[7].nextElementSibling.innerText = data.d;
optionInputs[8].nextElementSibling.innerText = data.d;
optionInputs[9].nextElementSibling.innerText = data.d;
}


const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    console.log(ans, data.correct)
    if(ans === data.correct){
        right++;
    } else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
           if (input.checked){
            answer = input.value;
           } 
        }
    )
    return answer;
}
    

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML =  `
    <div style="text-align:center">
    <h3> thanku for playing the quiz</h3>
    <h2>${right} / ${total}are correct</h2>
    </div>
    `

}
loadQuestion();
