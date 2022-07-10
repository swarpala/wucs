axios.get('/ajax/posting')
    .then(
        response => {
            const postList = document.getElementById("postList")
            const postArray = response.data;
            const columns = Object.keys(postArray[0]);
            appendHtml = "";
            for(i in columns){
                appendHtml += `<th><div class=cell-content>${columns[i]}</div></th>`
            }
            for(i in postArray){
                for(j in columns){
                    appendHtml += (j==0?'<tr>':'')+`<td><div class="cell-content">${postArray[i][columns[j]]}</div></td>`
                }
                appendHtml += '</tr>';
            }
            postList.innerHTML += appendHtml;
        }
    )
    .catch(
        error => console.log(error)
    )
    .then(
        () => {}
    );