const engCard = require ("./engineerCard")
const intCard = require ("./internCard")
const mangCard = require ("./managerCard")
// create a function that holds the html that will output the main body of the html and will take in the data from the other cards
function mainRender(data){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <title>Team</title>
    </head>
    <body>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">2021 Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                { The Amazing Team}
            </div>
        </div>
    </div>


    ${data.map(emp => {
        if (emp.getRole().toLowerCase() === "engineer") {
            return engCard(emp); 
        } else if (emp.getRole().toLowerCase() === "manager") {
            return intCard(emp);
        } else {
            return mangCard(emp);
        }
    })}
    
    </body>
    </html>
`
}

module.exports = mainRender