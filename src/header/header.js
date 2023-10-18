import PropTypes from "prop-types"
import {memo} from "react"
// memo para que no me dibuje el dom 
// va a quedar exsactamente igual 
const Header=memo(({titulo})=>{
    return(
        <>
        <h2>Header</h2>
        <p>title: {titulo}</p>
        </>
    )
})

Header.prototype = {
    titulo : PropTypes.string.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string,
        chart: PropTypes.number
    }).isRequired
}
export default Header