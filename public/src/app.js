{
    async function updateTable(root){

        const table = root.querySelector(".table-refresh__table")
        const response = await fetch(root.dataset.url);
        const data = await response.json();

        //Clear data

        table.querySelector("thead tr").innerHTML = '';
        table.querySelector("tbody").innerHTML = '';

        for( const header of data.headers){
            table.querySelector("thead tr").insertAdjacentHTML("beforeend", `<th>${ header }</th>`)
        }

        for(const row of data.rows){
            table.querySelector("tbody").insertAdjacentHTML("beforeend", `
                <tr>
                    ${row.map( col => `<td>${ col }</td>`).join("") }
                </tr>
            `);
        }
    }

    for(const root of document.querySelectorAll(".table-refresh[data-url]")){
        const table = document.createElement("table");
       

        table.classList.add("table-refresh__table");
        

        table.innerHTML = `
            <thead>
                <tr>
                    
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Loading</td>
                </tr>
            </tbody>
        `;

       

        root.append(table);

        
        updateTable(root);
    }

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    console.log(formattedToday)
    document.querySelector(".div-today").innerHTML = `<p>Tính đến ngày ${formattedToday.toString()}</p>`;
}