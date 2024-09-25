// import React, { useState, useEffect } from 'react'
import React, { Component } from 'react'
import Subject from './components/Subject'
import Nav from './components/Navbar'
import ReadContent from './components/ReadContent'
import Create from './components/Create'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'
import './App.css'


class App extends Component {
  // render보다 먼저 실행되면서 컴포넌트를 초기화해주는 역할
  constructor(props){
    super(props);
    this.max_content_id = 3;
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

  getReadContent() {
    var i = 0;
    while(i<this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }

  getContent() {
    var _title, _desc, _content = null;
    if(this.state.mode === 'homepage') {
      _title = this.state.homepage.title;
      _desc = this.state.homepage.desc;
      _content = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read'){
      // var i = 0;
      // while(i<this.state.contents.length){
      //   var data = this.state.contents[i];
      //   if(data.id === this.state.selected_content_id) {
      //     _title = data.title;
      //     _desc = data.desc;
      //     break;
      //   }
      //   i = i + 1;
      // }
      var _read = this.getReadContent();
      _content = <ReadContent title={_read.title} desc={_read.desc}></ReadContent>

      // _content = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'create'){
      _content = <CreateContent onSubmit={function(_title, _desc){
        // console.log(_title, _desc)
        this.max_content_id = this.max_content_id+1;

        // 원본을 수정하지 않는다 == 불변 (immutable)


        // push는 원본을 변경시킨다
        // this.state.contents.push({id:this.max_content_id, title:_title, desc:_desc});

        // concat : 원본을 그대로 두고 복제해서 변경시킨다.
        // var _content = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc});

        // Array.from(배열) : 배열 복제      // 객체를 복제하고 싶은 경우 : Object.assign({},객체);
        // Immutable을 활용하여 원본을 유지하고 복제본을 활용하는 방법도 유효
        var _content = Array.from(this.state.contents);
        _content.push({id:this.max_content_id, title:_title, desc:_desc});

        this.setState({
          contents:_content,
          mode: 'read',
          selected_content_id: this.max_content_id
        })


      }.bind(this)}></CreateContent>
    } else if(this.state.mode === 'update'){
      _read = this.getReadContent();
      _content = <UpdateContent data={_read} onSubmit={function(_id, _title, _desc){
        var _content = Array.from(this.state.contents);
        var i = 0 ;
        while(i < _content.length){
          if(_content[i].id === _id) {
            _content[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i = i + 1;
        }


        this.setState({
          contents:_content,
          mode: 'read'
        })


      }.bind(this)}></UpdateContent>
    }
    return _content;
  }

  render() {




    return (
      <div className='container'>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'homepage'});  // 원본을 변경한 것
          }.bind(this)}
        ></Subject>
        <Nav data={this.state.contents} onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          })
        }.bind(this)}></Nav>
        <Create onChangeMode ={function(mode) {
          if(mode === "delete"){
            if(window.confirm("Are you sure you want to delete it?")){
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i<this.state.contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  break
                }
                i = i + 1
              }
              this.setState({
                mode:"homepage",
                contents:_contents
              })
              alert('delete success!')
            }
          } else {
            this.setState({
              mode: mode
            })
          }
        }.bind(this)}></Create>
        { this.getContent() }
      </div>
    );
  }
}

export default App;


// Props vs State

// Props : read-only, can not be modified
// State : change can be asynchronous, can be modified using this.setState

// 컴포넌트 내에서의 props 수정은 불가능하다
// 컴포넌트 외부에서는 props 값을 수정할 수 있다

// 두 값의 변화는 render 함수 호출을 유발한다 (UI 변경 시 적절히 사용)

