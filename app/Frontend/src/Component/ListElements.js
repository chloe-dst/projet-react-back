import Element from "./Element";

export default function ListElements({elements}) {
    return (
        <div>
            {elements?.map((element) => (
                <Element title={element.title} content={element.content} key={element.id}/>
            ))}
        </div>
    )
}