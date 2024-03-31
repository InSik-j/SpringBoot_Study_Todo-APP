// 페이지에 로드되는 실제 내용이 들어 있는 파일

// import에서 {}가 없으면 export defalt가 import됨
import './App.css';
import TodoApp from './components/todo/TodoApp'

function App() {
  return (
    <div className="App">
      {/* <LearningComponent /> */}
      {/* <Counter/> */}
      <TodoApp/>
    </div>
  )
}

// function PlayingWithProps(properties){
//   console.log(properties)
//   console.log(properties.property1)
//   console.log(properties.property2)
  
//   return(
//     <div>Props</div>
//   )
// }

// function PlayingWithProps({property1, property2}){
//   console.log(property1)
//   console.log(property2)
  
//   return(
//     <div>Props</div>
//   )
// }

export default App;
