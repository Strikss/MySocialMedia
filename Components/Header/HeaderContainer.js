import Header from "./Header"
import React from "react"
import { connect } from "react-redux"
import { setAuthData } from "../../Redux/authReducer"
import * as axios from "axios";

class HeaderContainer extends React.Component{
componentDidMount(){
    axios
    .get("https:social-network.samuraijs.com/api/1.0/auth/me",{withCredentials: true})
    .then((response)=>{
        if(response.data.resultCode===0){
            let {id,login,email}=response.data.data;
        this.props.setAuthData(id,login,email)}
    })
}


    render(){
    return (
    <Header {...this.props}/>)

}
}

let mapStateToProps=(state)=>{
return{
    login:state.auth.login,
    isAuth:state.auth.isAuth
}
}

export default connect (mapStateToProps,{setAuthData})(HeaderContainer)