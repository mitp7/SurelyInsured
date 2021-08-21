import "./DataDisplay.css";

export default function DataDisplay() {
  return (
    <div className="dataDisplay">
      <span>Your location risks having insurance rates increase due to: </span>
      <div className="featuredData">
        <div className="dataInformation">
          <span className="dataStatistics">30%</span>
          <span className="dataCatergory">higher rates of accidents</span>
        </div>
      </div>

      <div className="featuredData">
        <div className="dataInformation">
          <span className="dataStatistics">30%</span>
          <span className="dataCatergory">higher rates of accidents</span>
        </div>
      </div>

      <div className="featuredData">
        <div className="dataInformation">
          <span className="dataStatistics">30%</span>
          <span className="dataCatergory">higher rates of accidents</span>
        </div>
      </div>

      <div className="featuredData">
        <div className="dataInformation">
          <span className="dataStatistics">30%</span>
          <span className="dataCatergory">higher rates of accidents</span>
        </div>
      </div>
    </div>
  );
}
