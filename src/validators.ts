const isValidDate = (value:Date) => {  
    if ( new Date(value).getDate() > new Date().getDate())
        return true
    else{
        return false
    }
}
const isValidStartTime = (value:Date) => {
    const venueHrs = parseInt(value.toString().split(":")[0])
    if(venueHrs >= 9)
        return true
    else 
        return false
}
const isValidEndTime = (value:Date) => {
    const venueHrs = parseInt(value.toString().split(":")[0])
    if(venueHrs <= 22)
        return true
    else 
        return false
}


export { isValidDate,isValidStartTime,isValidEndTime }