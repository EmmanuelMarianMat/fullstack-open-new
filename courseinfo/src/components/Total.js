const Total = (props) => {
    return (
        <strong>Number of exercises {props.parts.reduce((partialSum, part) => partialSum+part.exercises,0)}</strong>
    )
}

export default Total;