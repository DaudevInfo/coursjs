const getFullName = (firstName, lastName) => {
    
    const capitalize =  (st) => {

        let result = st.charAt(0).toUpperCase() 
        // for (i = 1; i < st.length; i++) {
        //     result += st.charAt(i)
        // }
        result += st.slice(1).toLowerCase()
        return result    
    } 
    return capitalize(firstName) + " " + capitalize(lastName)
}

console.log(getFullName ("jean","dupont"))