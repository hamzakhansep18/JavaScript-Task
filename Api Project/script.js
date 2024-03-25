fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
.then(response => response.json())
.then(data => {
    const populationData = data.data.map(entry => ({
        Year: entry.Year,
        Population: entry.Population,
    }));
    displayPopulationData(populationData);
})
.catch(error => console.error('Error fetching data:', error));
function displayPopulationData(populationData) {
const populationContainer = document.getElementById('populationData');

populationData.forEach(entry => {
    const entryElement = document.createElement('p');
    entryElement.textContent = `Year: ${entry.Year}, Population: ${entry.Population}`;
    populationContainer.appendChild(entryElement);
});
}