// import React, { useState, useEffect } from 'react'
import React, { Component } from 'react'
import Subject from './components/Subject'
import Nav from './components/Navbar'
import Content from './components/Content'
import './App.css'


class App extends Component {
  // render보다 먼저 실행되면서 컴포넌트를 초기화해주는 역할
  constructor(props){
    super(props);
    this.state = {
      mode: "homepage",
      selected_content_id:1,
      subject:{title:"React Refresh", sub:"react environment analysis"},
      homepage:{title:"React Master", desc:"react environment analysis"},
      contents: [
        {id:1, title:'HTML', desc:"HTML is for information"},
        {id:2, title:'CSS', desc:"CSS is for design"},
        {id:3, title:'JavaScript', desc:"JavaScript is for interactive"},
      ]
    }
  }

  render() {
    var _title, _desc = null;
    if(this.state.mode === 'homepage') {
      _title = this.state.homepage.title;
      _desc = this.state.homepage.desc;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }


    return (
      <div className='container'>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'homepage'});
          }.bind(this)}
        ></Subject>
        <Nav data={this.state.contents} onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id),
          })
        }.bind(this)}></Nav>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
