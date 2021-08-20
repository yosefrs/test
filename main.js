function singleCountry(){
    const country = $("#inputCountry").val();
    $.ajax({
        url: `https://restcountries.eu/rest/v2/name/${country}`,
        success: countryList => showCountry(countryList),
        error: err=> alert(err.status)
    });
    function showCountry(x){
        let htmlInner =  `
            <table>
                <tr>
                    <th>Name</th>
                    <th>Top Level Domain</th>
                    <th>Capital</th>
                    <th>Currencies</th>
                    <th>Borders</th>
                    <th>Flag</th> 
                </tr>`;
        for(const countryS of x){
            htmlInner += `<tr>
                    <td>${countryS.name}</td>
                    <td>${countryS.topLevelDomain}</td>
                    <td>${countryS.capital}</td>
                    <td>Code: ${countryS.currencies[0].code}<br/>Name: ${countryS.currencies[0].name}<br/>Symbol: ${countryS.currencies[0].symbol}</th>
                    <td>${countryS.borders}</td>
                    <td><img src="${countryS.flag}" width=55px height=40px></td> 
                </tr>`;
        }
        htmlInner += "</table>"
        $("#tableDiv").html(htmlInner);
    }
}
function allCountry(){
    $.ajax({
        url: `https://restcountries.eu/rest/v2/all`,
        success: countryList => showCountry(countryList),
        error: err=> alert(err.status)
    });
    function showCountry(x){
        let htmlInner =  `
            <table>
                <tr>
                    <th>Name</th>
                    <th>Top Level Domain</th>
                    <th>Capital</th>
                    <th>Currencies</th>
                    <th>Borders</th>
                    <th>Flag</th> 
                </tr>`;
        for(const countryS of x){
            htmlInner += `<tr>
                    <td>${countryS.name}</td>
                    <td>${countryS.topLevelDomain}</td>
                    <td>${countryS.capital}</td>
                    <td>${countryS.currencies[0].code}<br/>${countryS.currencies[0].name}<br/>${countryS.currencies[0].symbol}</th>
                    <td>${countryS.borders}</td>
                    <td><img src="${countryS.flag}" width=55px height=40px></td> 
                </tr>`;
        }
        htmlInner += "</table>"
        $("#tableDiv").html(htmlInner);
    }
}