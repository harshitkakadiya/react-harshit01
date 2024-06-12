// import { Container } from "postcss";
import { buy_cake } from "./redux/Index";
import {  connect } from "react-redux";


const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number OF Cakes - {props.numOfCake}</h2>
      <button onClick={props.buy_cake}>BuyCake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        numOfCake:state.numOfCake
    }
}

const mapDisptchToProps = dispatch => {
    return{
        buy_cake:() => dispatch(buy_cake())
    }
}


export default connect(mapStateToProps , mapDisptchToProps)
(CakeContainer)
