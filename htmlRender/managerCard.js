// create a function that holds the html that will out put the manager
function managerCard(data){
    return `
    <div class="col d-flex justify-content-center">
    <div class="card text-center employee-card" style="width: 18rem;">
    <div class="card-header">
    <h2 class="card-title text-white bg-primary">${ data.name }</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Manager</h3>
    </div>
    <div class="card-body">
    <p class="card-text">${ data.id }</p>
    <p class="card-text">${ data.email }</p>
    <p class="list-group-item">${ data.officeNumber }</p>
    </div>
    </div>
    </div>
    `
    // return `
    //         <div class="card employee-card">
    //         <div class="card-header">
    //             <h2 class="card-title">${ data.name }</h2>
    //             <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    //         </div>
    //         <div class="card-body">
    //             <ul class="list-group">
    //                 <li class="list-group-item">ID: ${ data.id }</li>
    //                 <li class="list-group-item">Email: <a href="mailto:${ data.email }>${ data.email }</a></li>
    //                 <li class="list-group-item">Office number: ${ data.officeNumber }</li>
    //             </ul>
    //         </div>
    //         </div>
    // `
}
module.exports = managerCard