let employees = [
    { id: 101, name: "Rahul Gandhi", sal: 45000, loc:"Delhi" },
    { id: 102, name: "Sonia Gandhi", sal: 55000 , loc: "Italy"},
    { id: 103, name: "Priyanka Gandhi", sal: 65000, loc: "Haryana" },
    { id: 104, name: "Modi", sal: 85000 , loc: "Gujarath"},
    { id: 105, name: "Mamtha", sal: 60000 , loc: "Kolkata"}
]
function getEmployees() {
    let rows = ""
    for (let i = 0; i <= employees.length - 1; i++) {
        rows = rows + `<tr>
                            <td>${employees[i].id}</td>
                            <td>${employees[i].name}</td>
                            <td>${employees[i].sal}</td>
                            <td>${employees[i].loc}</td>

                        </tr>`
    }
    document.getElementById('tbody_Data').innerHTML = rows
}