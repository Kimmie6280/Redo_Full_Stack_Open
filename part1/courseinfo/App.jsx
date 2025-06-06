//1.1 - 1.2

//Header takes care of rendering the name of the course,
const Header =(props) =>{

  console.log(props)

  return(
    <h1> {props.course} </h1>
  )
}

/*Content renders the parts and their number of exercises */ 
const Content = (props) =>{

  return(
    <div>

    <p>{props.part1} {props.exercises1}</p> 
    <p>{props.part2} {props.exercises2}</p> 
    <p>{props.part3} {props.exercises3}</p>

    </div>
    
  )
}

//and Total renders the total number of exercises.

const Total = (props) =>{
  return(
    <p>Total Number of Excerises {props.exercises1 + props.exercises2+props.exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
      part1={part1} exercises1={exercises1} 
      part2={part2} exercises2={exercises2} 
      part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2}exercises3={exercises3}/>
    </div>
  )
}

export default App
