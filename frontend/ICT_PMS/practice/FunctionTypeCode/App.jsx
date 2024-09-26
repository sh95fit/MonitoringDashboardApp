import React, { useState, useEffect } from 'react'
import './App.css'

function Header(props) {
  return <header>
    <h1><a href="/" onClick={(e)=>{
      e.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props) {

  // for문을 이용한 방법
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={"/read/"+t.id} onClick={(e)=>{
      e.preventDefault();
      props.onChangeMode(e.target.id)
    }}>{t.title}</a></li>)
  }


  // map을 이용한 방법
  const topics = props.topics
  const liList = topics.map((topic) =>
    <li key={topic.id}><a id={topic.id} href={"/read/"+topic.id} onClick={(e)=>{
      e.preventDefault();
      props.onChangeMode(topic.id);

      // 숫자형이 태그로 적용되면 문자형으로 변경되므로 주의!  (Number함수를 적용하거나 위 방식 사용)
      // props.onChangeMode(e.target.id);
    }}>{topic.title}</a></li>
  )

  return <nav>
    <ol>
      {liList}
      {/* {lis} */}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function CreateContent(props){
  const [values, setValues] = useState({
    name:"",
    content:"",
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]:e.target.value,
    })
  }

  return <form onSubmit={(e)=>{
    e.preventDefault();
    // console.log(values)
    props.onCreate(values)
  }}>
    <h2>Create</h2>
    <p><input type="text" id="name" placeholder='name' onChange={handleChange}></input></p>
    <p><textarea name="body" id="content" placeholder='body' onChange={handleChange}></textarea></p>
    <p><button type="submit">생성</button></p>
  </form>
}

function UpdateContent(props){
  // const topics = props.data
  // const sid = props.id

  // var topic = []
  // var i = 0;
  // while(i < topics.length){
  //   if(topics[i].id === sid){
  //     topic = topics[i]
  //   }
  //   i = i + 1
  // }

  const {data : topics, id : sid} = props;

  const topic = topics.find(topic => topic.id === sid) || {title: '', body: ''};

  const [values, setValues] = useState({
    name:topic.title,
    content:topic.body,
  })

  useEffect(() => {
    setValues({
      name:topic.title,
      content:topic.body
    });
  }, [sid, topic])

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]:e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdate(values);
  }

  return <form onSubmit={handleSubmit}>
    <h2>Update</h2>
    <p><input type="text" id="name" placeholder='name' onChange={handleChange} value={values.name}></input></p>
    <p><textarea name="body" id="content" placeholder='body' onChange={handleChange} value={values.content}></textarea></p>
    <p><button type="submit">수정</button></p>
  </form>
}



function App() {
  const [mode, setMode] = useState("Homepage");
  const [sid, setSid] = useState(null);
  const [maxid, setMaxid] = useState(3);
  const [topics, setTopics] = useState([
    {id:1, title:"html", body:"HTML is ..."},
    {id:2, title:"css", body:"CSS is ..."},
    {id:3, title:"javascript", body:"JAVASCRIPT is ..."},
  ])

  let content = null;
  let update = null;
  let delete_tag = null;

  if(mode === "Homepage"){
    content = <Article title="React" body="This Web is React Practice"></Article>
  } else if (mode === "Read"){

    update = <a href={"/update/"+ sid} onClick={(e)=>{
      e.preventDefault();
      setMode("Update");
    }}>Update</a>

    delete_tag = <input type="button" value='delete' onClick={function(e){
      e.preventDefault();
      setMode("Delete");
    }}></input>

    // for문을 사용하는 경우
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === sid) {
        content = <Article title={topics[i].title} body={topics[i].body}></Article>
      }
    }

    // 직접 props 값을 적용하는 경우
    // content = <Article title={topics[sid].title} body={topics[sid].body}></Article>
  } else if (mode === "Create") {
    content = <CreateContent onCreate={(values)=>{
      const max_content_id = maxid+1;

      var _content = Array.from(topics);
      _content.push({id:max_content_id, title:values.name, body:values.content});

      setTopics(_content);
      setMaxid(max_content_id);
      setSid(max_content_id);
      setMode("Read");
    }}></CreateContent>
  } else if (mode === "Update") {
    content = <UpdateContent data={topics} id={sid} onUpdate={(values)=>{
      // var _content = Array.from(topics);

      // var i = 0;

      // while(i < _content.length) {
      //   if(_content[i].id === sid) {
      //     _content[i] = {id:sid, title:values.name, body:values.content};
      //     break
      //   }
      //   i = i+1
      // }

      const _content = topics.map((topic) => {
        return (topic.id === sid ? {id:sid, title:values.name, body:values.content} : topic)
      })

      setTopics(_content);
      // setSid(sid);
      setMode("Read");
    }}>
    </UpdateContent>
  } else if (mode === 'Delete') {
    if(window.confirm("Are you sure you want to delete it?")){
      const _content = topics.filter(topic => topic.id !== sid);

      setTopics(_content);
      setMode("Homepage");
    }
  }

  return (
    <div className='container'>
      <Header title="React" onChangeMode={function(){
        // alert("Header");
        setMode("Homepage");
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        // alert(id)
        setMode("Read");

        // for문을 활용하는 경우
        setSid(_id);

        // 직접 topics props 값을 적용하는 경우
        // setSid(_id-1);
      }}></Nav>
      {content}

      <a href="/create" onClick={(e)=> {
        e.preventDefault();
        setMode("Create");
      }}>Create</a>

      {update}
      {delete_tag}
    </div>
  )
}

export default App
