import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const index = ({ data }) => {
  return (
    <div>
      <Carousel autoPlay>
        {data.map((item, index) => {
          return (
            <header key={index}>
              <center>
                <img
                  src={item.image}
                  alt=""
                  style={{ height: "300px", width: "300px" }}
                />
                <p className="legend">
                  <h1>{item.title}</h1>
                  <h3>${item.price}</h3>
                  <h2>{item.rating.rate}⭐</h2>
                </p>
              </center>
            </header>
          );
        })}
      </Carousel>
    </div>
  );
};

export default index;
