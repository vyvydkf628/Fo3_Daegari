import React from "react";
import Web3 from "web3";


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
        if (window.ethereum) {
            window.ethereum.enable().then((res) => {
                this.web3 = new Web3(window.ethereum);
                this.findAccount()
                .then(res => this.setState({profile: res}))
                .catch(err => console.log(err));
            });
        }
      }
    
    findAccount = async () =>{
        const account = await this.web3.eth.getAccounts()
        
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