// import { Container } from "postcss";
import { buy_chocolate } from "./redux/Index";
import {  connect } from "react-redux";


const ChocolateContainer = (props) => {
  return (
    <div>
      <h2>Number OF Chocolate - {props.numOfChocolate}</h2>
      <button onClick={props.buy_chocolate}>BuyChocolate</button>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        numOfChocolate:state.numOfChocolate
    }
}

const mapDisptchToProps = dispatch => {
    return{
      buy_chocolate:() => dispatch(buy_chocolate())
    }
}


export default connect(mapStateToProps , mapDisptchToProps)
(ChocolateContainer)
