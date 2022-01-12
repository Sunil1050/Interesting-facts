let userInput = document.getElementById('userInput');
let factEle = document.getElementById('fact');
let spinnerEle = document.getElementById('spinner');

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter'){
        spinnerEle.classList.toggle('d-none');
        if (userInput.value === ""){
            alert('Enter a number')
        }
        else{
            let userInputVal = userInput.value;
            let options = {
                method : 'GET'
            }
            let url = "https://apis.ccbp.in/numbers-fact?number="+userInputVal;
            fetch(url,options)
            .then((response)=>{
                return response.json()
            })
            .then((jsonData)=>{
                spinnerEle.classList.toggle('d-none');
                let {fact} = jsonData;
                factEle.textContent = fact;
                factEle.classList.add('fact-text');
            });
        }
    }
})