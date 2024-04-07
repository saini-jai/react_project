let name = "Mohan";
let num = 3;

const users = [
  {name:"Mohan", age:23},
  {name:"Ram", age:24},
  {name:"Shyam", age:22}
]

function CheckEvenOdd(num){
      if (num%2===0){
        return <div>Odd number</div>
      }
      else{
        return <div> Even number </div>
      }
}

function CheckVowel(letter){
  switch(letter){
  case 'a':
  case 'e':
  case 'i':
  case '0':
  case 'u':
  case 'A':
  case 'E':
  case 'I':
  case 'O':
  case 'U':  
    return<div> {letter} is Vowel </div>
  default:
    return<div> {letter} is Consonant </div>
}
}

let num1 = 4;
function Jsx(){
  return (
    <div>
      <h2> Hello {name} </h2>
      <h2> If Else statemnet </h2>
      <div>
        {
          CheckEvenOdd(5)
        }
        {
          num%2===0 
          ? <div> Even number </div> 
          : <div> Odd Number </div>
        }
        <h3> If statemnet </h3>
        {
          num1%2===0 && <div> Even number </div>
        }
        {
          num1%2===0 && <div> Odd number </div>
        }
      </div>
      <div>
        <h3> Loops </h3>
        {
          users.map((item, index) => {
            return <div key={index}>
            {item.name} - {item.age}</div>
          })
        }
      </div>
      <div>
        <h3> CheckVowel </h3>
        {
          CheckVowel('h')
        }
      </div>
    </div>
  );
}

export default Jsx;

export function Greet(){
    return <h2> Hello world </h2>
  }