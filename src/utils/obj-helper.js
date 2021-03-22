export let updateObjInArray = (arr, itemSearchId, objPropName, newObjProps) => {
    return  arr.map (item => {
        if(item[objPropName] === itemSearchId) {
            return {...item, ...newObjProps};
        }
        return item;
    })
}
