import React, { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1><a href="/" onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;


// <header>
// <h1><a href="/" onClick={function(e) {
//   e.preventDefault();  // 이벤트가 발생했을 때 기본적인 동작(페이지 리로드) 방식을 제한
//   // state 값 변경 시 setState 사용
//   // this.state.mode = 'homepage'  직접 변경 시 React가 인식을 하지 못한다.
//   this.setState({     // 동적으로 state값을 수정할 때는 함수를 setState 함수를 활용해야 한다.
//     mode:'homepage'
//   });
// }.bind(this)}>{this.state.subject.title}</a></h1>   {/* 외부의 this를 함수 내부로 주입하기 위해 bind 사용 */}

// {this.state.subject.sub}
// </header>