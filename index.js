// code your solution here
function superbowlWin(record){
    const win= record.find(record => record.result === "W")
    if (win){
        return win.year
    }
    if (!win){
        return undefined
    }
}