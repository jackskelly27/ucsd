export function convertSelectionsToQueryString(selectionData) {

    const dataAsAnArray = Object.entries(selectionData);
    const filteredDataAsAnArray = dataAsAnArray.filter((subArray) => {
      return subArray[1] !== "all";
    })
    const filteredData = Object.fromEntries(filteredDataAsAnArray);

    const queryString = Object.keys(filteredData).map(function(key) {
      return  key + '=' + filteredData[key]
    }).join('&');

    console.log(queryString);

    return queryString;
}