const cakeReducer=(storeState, action)=>{
    if(action.type ==="Buy Cake"){
        return {
            numOfCakes: storeState.numOfCakes-1,
        }
    }
    else if(action.type ==="Refund Cake"){
        return{
            numOfCakes : storeState.numOfCakes +1
        }
    }
    else{
        return{
            numOfCakes  : 100
        }
    }
}

export default  cakeReducer;