import React from "react";
import web3 from "../bloc/contracts/web3";


var util = require('web3-utils');

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={
          profile:'',
          completed:0
        }
      }
    stateRefresh = () =>{
      this.setState({
        profile:'',
        completed:0
      })
      this.callApi()
        .then(res => this.setState({profile: res}))
        .catch(err => console.log(err));
    }
    
    
      componentDidMount(){
        // this.timer = setInterval(this.progress,20);
        this.findAccount()
        .then(res => this.setState({profile: res}))
        .catch(err => console.log(err));
      }
    
    findAccount = async () =>{
        const account = await web3.eth.getAccounts()
        
        console.log(account[0])
        return account;
    }

        

    render(){
    return (
      <div>
          {this.state.profile ? <div> {this.state.profile} <button onClick= {this.sendTransaction}> send transaction </button></div>: <div> loading </div>
            //    <CircularProgress className={classes.progress} variant = "determinate" value={this.state.completed} />
            }
      </div>
    );
    }
};
  
  export default Profile;