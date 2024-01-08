import { Card } from "./Card"

export const Dishes= (props) => {  
  return (
    <div className="dishesHolder">
      <div className="dCards">
        {props.data.map((ele, key) => {
          return (
            <div id={key}>
              <Card img={ele.img} title={ele.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}