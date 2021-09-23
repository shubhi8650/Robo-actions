const Card = ({ data }) => {
  return (
    <div className="main-card">
      {data.map((item) => (
        <div className="wrapper-card">
          <div className="image">
            <img src={`https://robohash.org/${item.id}?200x200`} alt="pic" />
          </div>
          <div className="details">
            <h3>{item.name}</h3>
            <p>{item.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
