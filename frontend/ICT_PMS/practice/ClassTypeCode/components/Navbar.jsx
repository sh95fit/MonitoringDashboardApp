import React, { Component } from 'react';

class Nav extends Component {
  shouldComponentUpdate(newProps, newState) {
    // newProps.data와 this.props.data 값이 동일

    // 중요! state 원본을 변경하면 두 값이 함께 변경된다
    // 즉, push 함수는 원본을 변경하므로 아래의 비교를 사용할 수 없다
    // concat과 같이 복제본을 통해 변경시킨 경우 비교를 사용할 수 있다

    // 부모 컴포넌트의 state가 변경될 때 newProps는 수정이 반영되고 this.props.data에는 반영되지 않는다
    // 즉, newProps는 변경이 발생한 값, this.props.data는 변경되기 전 값을 의미

    if(newProps.data === this.props.data){
      return false;
    }
    return true;

    // return true; // render 함수를 정상적으로 호출한다.
    // return false; // render 함수를 호출하지 않는다.
  }

  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length){
      // 태그 속성 값을 이용해 ID를 전달하는 방식
      // lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id} data-id={data[i].id} onClick={function(e){
      //   e.preventDefault();
      //   this.props.onChangePage(e.target.dataset.id);
      // }.bind(this)}>{data[i].title}</a></li>)


      // bind 파라미터로 ID를 전달하는 방식
      // bind에서 추가되는 것들은 function에서 이벤트 파라미터 앞에 파라미터를 배치하여 운용한다.
      lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id} onClick={function(id, e){
        e.preventDefault();
        this.props.onChangePage(id);
      }.bind(this, data[i].id)}>{data[i].title}</a></li>)
      i = i + 1;
    }

    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}

export default Nav;