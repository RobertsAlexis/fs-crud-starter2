console.log('👋🌍');
function getAndRenderDB(){
    axios ({
        method: 'GET',
        url: '/team_crud',
        })
    .then((response) => {
        let rowData = response.data;
        console.log('checking to see', rowData)

        for(dbData of rowData){
        let dbList=document.getElementById("dbList")
        dbList.innerHTML += 
        `<tr> 
            <td>${dbData.name}</td> 
            <td>${dbData.is_nifty}</td>
            <td>${dbData.inserted_at}</td> 
        </tr>`
        }
    })
}

getAndRenderDB();