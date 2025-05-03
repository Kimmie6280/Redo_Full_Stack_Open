//Header takes care of rendering the name of the course,
const Header =(props) =>{

  console.log(props)
  const course = props.course

  return(
    <h1> {course} </h1>
  )
}

//Part components of which each renders the name and number of exercises of one part.
const Part = ({name,exercise }) => {
  console.log(name, exercise)

  return (
    <p>{name} {exercise}</p>
  )
}
/*Content renders the parts and their number of exercises */ 

const Content = (props) =>{
  console.log(props)

  return(
    <>
      <Part name={props.parts[0].name} exercise={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercise={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercise={props.parts[2].exercises}/>

    </>
  )
}
//and Total renders the total number of exercises.

const Total = (props) =>{
  console.log(props)

  return(
    <p>Total Number of Excerises {props.parts[0].exercises + props.parts[1].exercises+props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
 
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} exercise={parts.exercise}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App
