import './smallcarousel.css';

const SmallCarousal = ({ data }) => {
  return (
    <div className="smallcarousal">
      <div className="container">
        {data.map((element, index) => (
          <div className="item" key={index}>
            <div className="image">
              <img src={element.image} alt='img'/>
            </div>
            <div className="title">
              <p>{element.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <button className='next-round-button'>
          <img src="https://www.1mg.com/images/next-round.svg"  alt='img'/>
        </button>
      </div>
    </div>
  );
};

export default SmallCarousal;