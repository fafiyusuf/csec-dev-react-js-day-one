function Content({title,description}){
    return(
        <div>
            <h2>{title}</h2>
            <p style={{ lineHeight: "1.6", whiteSpace: "pre-line" }}>{description}</p>
        
        </div>
    );
}
export default Content 