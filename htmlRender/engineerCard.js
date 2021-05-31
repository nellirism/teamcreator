// create a function that holds the html that will out put the engineer
function engineerCard(data){
    return `
    <div class="col d-flex justify-content-center">
    <div class="card text-center employee-card" style="width: 18rem;">
    <div class="card-header">
    <h2 class="card-title">${ data.name }</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> Engineer</h3>
    </div>
    <div class="card-body">
    <p class="card-text">${ data.id }</p>
    <p class="card-text">${ data.email }</p>
    <p class="list-group-item">GitHub: <a href="https://github.com/${ data.github }" target="_blank" rel="noopener noreferrer">${ data.github }</a></p>
    </div>
    </div>
    </div>
    `
}

module.exports = engineerCard