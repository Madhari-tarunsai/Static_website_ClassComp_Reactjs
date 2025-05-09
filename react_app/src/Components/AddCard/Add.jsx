import React from "react"
import { FaRegSadTear } from "react-icons/fa";
import './Add.css'
class AddCart extends React.Component{
    render(){
        return(
            <div className="h11">
            <h1>No items are added here......  <FaRegSadTear /></h1>
            </div>
        )
    }
}
export default AddCart