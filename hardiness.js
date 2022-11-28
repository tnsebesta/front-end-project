const submitButton = document.getElementById("submit");
const input = document.querySelector("input[name='search']");
const main = document.getElementById('main');


submitButton.addEventListener('keypress', (e) => {

  
  if (e.key === 'Enter'){
  const searchText = input.value;

  const oldResults = document.getElementById('results');
  oldResults.remove();
  

$.get({
    url: `https://phzmapi.org/${searchText}.json`, 
    success: (data) => {

        const newResults = document.createElement('div');
        main.append(newResults);

        const zone = data.zone;
        const tempRange = data.temperature_range;

        const newDiv = document.createElement('div');
        const ul1 = document.createElement('ul1');
        ul1.innerHTML = `<br/>Zone: ${zone} `;
        newDiv.append(ul1);
        newResults.append(newDiv);
        const li = document.createElement('li');
        li.innerHTML = `Temperature Range: ${tempRange} °F`;
        ul1.append(li);
        const li1 = document.createElement('li1');
        li1.innerHTML = `<br/>      `;
        ul1.append(li1);



        newResults.id = 'results';


    }

    
});
  }
});
