const apiPage=()=>{
    let dataToReturn=null

    fetch("https://projects.propublica.org/nonprofits/api/v2/search.json")
.then((response)=>response.json())
.then((data)=>dataToReturn=data)
console.log("data",dataToReturn)
return dataToReturn
}
export default apiPage