import React from 'react'
import './header.scss';
import 'semantic-ui-css/semantic.min.css';

import { Link } from "react-router-dom";

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            curPage: 'main'
        }
    }

    pageMove = (event, str) => {
        this.setState({
            curPage : str
        })
    }
    render(){
        return (<div className="full-width-view">
            <div className="header-inner-area">
                <h3>덕</h3>
                <div className="ui three item menu">
                    <Link className={this.state.curPage === 'main'?"item active": 'item'} to= {"/"} onClick={e => this.pageMove(e,'main')}>게시판</Link>
                    <Link className={this.state.curPage === 'profile'?"item active": 'item'} to={"/profile"} onClick={e => this.pageMove(e, 'profile')}>profile</Link>
                    <Link className={this.state.curPage === 'smart'?"item active": 'item'} to={"/smartContrac"} onClick={e => this.pageMove(e, 'smart')}>smart contract</Link>
                    
                </div>
            </div>
        </div>)
    }
}
export default Header