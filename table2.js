let employees = [{ "id": 1, "name": "Jacques", "sal": "€24360,80" },
{ "id": 2, "name": "Paule", "sal": "€49214,89" },
{ "id": 3, "name": "Hayward", "sal": "€26104,96" },
{ "id": 4, "name": "Pedro", "sal": "€8495,30" },
{ "id": 5, "name": "Ruthy", "sal": "€10066,31" },
{ "id": 6, "name": "Far", "sal": "€18152,13" },
{ "id": 7, "name": "Lyndell", "sal": "€39545,53" },
{ "id": 8, "name": "Nevin", "sal": "€23367,06" },
{ "id": 9, "name": "Filippa", "sal": "€30247,79" },
{ "id": 10, "name": "Luce", "sal": "€20896,02" },
{ "id": 11, "name": "Lev", "sal": "€6729,21" },
{ "id": 12, "name": "Bianka", "sal": "€43518,25" },
{ "id": 13, "name": "Kinnie", "sal": "€13249,24" },
{ "id": 14, "name": "Lilla", "sal": "€16086,31" },
{ "id": 15, "name": "Zeke", "sal": "€46789,49" },
{ "id": 16, "name": "Anabal", "sal": "€12269,77" },
{ "id": 17, "name": "Lizzie", "sal": "€15907,68" },
{ "id": 18, "name": "Georgetta", "sal": "€17264,18" },
{ "id": 19, "name": "Chiquia", "sal": "€33516,93" },
{ "id": 20, "name": "Alida", "sal": "€16010,37" },
{ "id": 21, "name": "Charissa", "sal": "€37839,66" },
{ "id": 22, "name": "Brucie", "sal": "€17774,69" },
{ "id": 23, "name": "Rollie", "sal": "€43274,57" },
{ "id": 24, "name": "Wendeline", "sal": "€6395,77" },
{ "id": 25, "name": "Yulma", "sal": "€47675,13" }]
function getEmployees() {
    let rows = ""
    for (emp of employees) {
        rows = rows + `<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name.toUpperCase()}</td>
                            <td>${emp.sal.slice(1)}</td>
                        </tr>`
    }
    document.getElementById('tbody_Data').innerHTML = rows
}