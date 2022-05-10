import Part from "./Part";

const Content = (props) => {
    return (
        <>
        {props.parts.map((part, i) => 
            <Part part={part.name} exercises={part.exercises} key={i}/>
        )}
        </>
    )
}

export default Content;