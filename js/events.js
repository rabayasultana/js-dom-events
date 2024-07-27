console.log("This is separate JS file")
// Option 1-Directly set on the html element
// <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>

// Option 2-Add onclick function on the html element
// Important:We will use it
// <button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3
// <button id="make-blue">Make Blue</button>
const makeBlueButton = document.getElementById('make-blue');
        console.log(makeBlueButton);
        makeBlueButton.onclick = makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }

// option 3 another
// <button id="make-purple">Make Purple</button>
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// option 4
// <button id="make-pink">Make Pink</button>
const pinkButton = document.getElementById('make-pink');
        pinkButton.addEventListener('click', makePink);

        function makePink(){
            document.body.style.backgroundColor = 'pink';
        }

// option 4 another
// <button id="make-green">Make Green</button>
const makeGreenButton = document.getElementById('make-green');
       makeGreenButton.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor = 'green';
       }) 

// option 4 final
// Important:We will use it
// <button id="make-goldenrod">Make Goldenrod</button>
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
   })