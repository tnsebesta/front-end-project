const submitButton = document.getElementById("submit");
const input = document.querySelector("input[name='search']");
const main = document.getElementById('main');


submitButton.addEventListener('keypress', (e) => {

  
  if (e.key === 'Enter'){
  const searchText = input.value;


  const oldResults = document.getElementById('results');
  oldResults.remove();
  
  $.get({
    url: `https://openfarm.cc/api/v1/crops/${searchText}`, 
    success: (data) => {
        console.log(data);

        const newResults = document.createElement('div');
        main.append(newResults);

        const plantName = data.data.attributes.name;
        const binomialName = data.data.attributes.binomial_name;
        const description = data.data.attributes.description;
        const growingDays = data.data.attributes.growing_degree_days;
        const height = data.data.attributes.height;
        const rowSpacing = data.data.attributes.row_spacing;
        const spread = data.data.attributes.spread;
        const sowingMethod = data.data.attributes.sowing_method;
        const sunReqs = data.data.attributes.sun_requirements;

        const h1 = document.createElement('h1');
        h1.innerHTML = plantName;
        newResults.append(h1);
        const h2 = document.createElement('h2');
        h2.innerHTML = binomialName;
        newResults.append(h2);
        const newDiv = document.createElement('div');
        const ul1 = document.createElement('ul1');
        ul1.innerHTML = "<br/><br/>Description: ";
        const p1 = document.createElement("p1");
        p1.innerHTML = description;
        ul1.append(p1);
        newDiv.append(ul1);
        newResults.append(newDiv);
        const ul = document.createElement('ul');
        ul.innerHTML = "<br/><br/>Growing Information: "
        const li = document.createElement('li');
        li.innerHTML = `Growing Days: ${growingDays}<br/>`;
        ul.appendChild(li);
        const li1 = document.createElement('li1');
        li1.innerHTML = `Sun Requirements: ${sunReqs}<br/>`;
        ul.appendChild(li1);
        const li2 = document.createElement('li2');
        li2.innerHTML = `Height: ${height} inches<br/>`;
        ul.appendChild(li2);
        const li3 = document.createElement('li3');
        li3.innerHTML = `Spread: ${spread} inches<br/>`;
        ul.appendChild(li3);
        const li4 = document.createElement('li4');
        li4.innerHTML = `Row Spacing: ${rowSpacing} inches<br/>`;
        ul.appendChild(li4);
        const li5 = document.createElement('li5');
        li5.innerHTML = `Sowing Method: ${sowingMethod}<br/>`;
        ul.appendChild(li5);
        newResults.appendChild(ul);
        
        newResults.id = 'results';

        
      }

    
  });
}

});