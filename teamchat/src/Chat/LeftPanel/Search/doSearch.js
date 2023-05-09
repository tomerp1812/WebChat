export const doSearch = function(originalContactsList, q){
    if (q === "") {
        return originalContactsList;
    } else {
        return originalContactsList.filter((contact) => contact.name.includes(q));
    }
}
