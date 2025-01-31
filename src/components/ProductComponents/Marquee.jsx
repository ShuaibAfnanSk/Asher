const Marquee = ({product}) => {

    const repitition = 20;

    return ( 
        <div className="marquee">
            <div className="mover">
                {Array.from({ length: repitition }).map((_, index) => (
                    <span key={index}>Ingredients</span>
                ))}
            </div>
            <div className="mover">
                {Array.from({ length: repitition }).map((_, index) => (
                    <span key={index}>Ingredients</span>
                ))}
            </div>
            <div className="mover">
                {Array.from({ length: repitition }).map((_, index) => (
                    <span key={index}>Ingredients</span>
                ))}
            </div>
        </div>
     );
}
 
export default Marquee;