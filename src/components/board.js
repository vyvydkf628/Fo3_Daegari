import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import faker from 'faker';
import web3 from 'web3';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            content: '',
        }

    }
    mapping= ()=>{
        try {
            const temp =web3.utils.hexToString(this.props.content.input)
            const result = JSON.parse(temp);
            
            
            if(result.name){
                this.state.userName = result.name
                this.state.content = result.content
                console.log("suc")
                console.log(this.state.content)
            }
                
        } 
        catch (error) {
            
        }
    }
    componentDidMount(){
        this.mapping()
        console.log(this.state.userName)
    }
    render() {
        return (<>
        {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
            {this.state.userName &&
            <div className="comment">
                <a className="avatar">
                    <img alt ="thmubNail" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a className="author">{this.state.userName ? <div> {this.state.userName} </div> : <div> loading </div>
            }</a>
                    <div className="metadata">
                        <span className="date">{this.props.content.blockTime}</span>
                    </div>
                    <div className="text">
                        {this.state.content}
                    </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                    </div>
                </div>
                <hr></hr>
            </div>
            }
            </>
        )
    }
}

export default Board