// create a function that holds the html that will out put the intern
function internCard(data){
    return `
    <div class="col d-flex justify-content-center">
    <div class="card text-center employee-card" style="width: 18rem;">
    <div class="card-header">
    <h2 class="card-title">${ data.name }</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> Intern</h3>
    </div>
    <div class="card-body">
    <section class="list-group">
    <p class="list-group-item">ID: ${ data.id }</p>
    <p class="card-text">Email: <a href="mailto:${ data.email }>${ data.email }</a></p>
    <p class="card-text">School: ${ data.school }</p>
    </section>
    </div>
    </div>
    </div>
`

}
module.exports = internCard