import React from "react";

import web3 from '../bloc/contracts/web3'


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
    hidden : {
        display : 'none'
    },
    popup : {
        height : 100
    }
})



class SendTransaction extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // file:null,
            userName:'',
            content: '',
            // birthday:'',
            // gender:'',
            // fileName:'',
            open: false
        }

    }
    handleCLickOpen= () =>{
        this.setState({
            open : true
        })
    }
    
    handleClose= () =>{
        this.setState({
            // file:null,
            userName:'',
            content: '',
            // birthday:'',
            // gender:'',
            // fileName:'',
            open: false
        })
    }
    sendTransaction = (name,content) =>{

        const inputData = {
            name,content
        }
        const parsedData=JSON.stringify(inputData)
        const msgdata = Buffer.from(parsedData, 'utf8').toString('hex');
        const transaction = ({
            from: web3.givenProvider.selectedAddress,
            to: "0x1057B46cd3aB3c770e0a04e8D55Dd972faF8Ac4C",
            value: web3.utils.toWei("0.01", "ether"),
            gas: 30000,
            data : msgdata
        })
        web3.eth.sendTransaction(transaction)
        console.log("ASD")
    }
    handleValueChange=(e) =>{
        let nextState={};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleFormSubmit=(e)=>{
        console.log("A")
        e.preventDefault()
        this.sendTransaction(this.state.userName,this.state.content)
        
        this.setState({
            file:null,
            userName:'',
            birthday:'',
            gender:'',
            fileName:'',
            open : false
        })
    }
    render(){
        return (<>
            <Button varient = "contained" color = "primary" onClick= {this.handleCLickOpen}>Write</Button>
            <Dialog open= {this.state.open} onClose = {this.handleCLickOpen}>
                <DialogContent>
                <DialogTitle>Send the Post</DialogTitle> 
                <br/><TextField label="userName" type="text" name= "userName" value={this.state.userName} onChange={this.handleValueChange}></TextField>
                <br/><TextField label ="content" type ="text" name= "content" value ={this.state.content} onChange={this.handleValueChange}></TextField>
                </DialogContent>
                <DialogActions>
                        <Button variant="contained" color="primary" onClick= {this.handleFormSubmit}>ADD</Button>
                        <Button variant="outlined" color="primary" onClick= {this.handleClose}>CLOSE</Button>
                </DialogActions>
            </Dialog>
        </>)
    }
}
export default SendTransaction