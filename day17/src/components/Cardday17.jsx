const Caard=(props) =>{
    return (
        <div className="main">
            <div className="meme">
            <img src={props.img} alt="" ></img>
            <div className="title">{props.title}</div>
            </div>
        </div>
    );
};
export default Caard;