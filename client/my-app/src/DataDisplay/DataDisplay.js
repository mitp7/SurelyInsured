import "./DataDisplay.css";

export default function DataDisplay() {
  return (
      <div className="heading">
        <h1>Your location risks result in insurance rates being high/low because:</h1>
        <div className="dataDisplay">
            <div className="featuredData">
                <div className="dataInformation">
                    <span className="dataStatistics">32%</span>
                    <img src="/images/green_icon.png" alt=""></img>
                    <span className="dataCatergory">Lower rates of accidents</span>
                </div>
            </div>

            <div className="featuredData">
                <div className="dataInformation">
                    <span className="dataStatistics">30%</span>
                    <img src="/images/red_icon.png" alt=""></img>
                    <span className="dataCatergory">Higher rates of accidents</span>
                </div>
            </div>

            <div className="featuredData">
                <div className="dataInformation">
                    <span className="dataStatistics">30%</span>
                    <img src="/images/green_icon.png" alt=""></img>
                    <span className="dataCatergory">Lower rate of accidents</span>
                </div>
            </div>

            <div className="featuredData">
                <div className="dataInformation">
                    <span className="dataStatistics">30%</span>
                    <img src="/images/red_icon.png" alt=""></img>
                    <span className="dataCatergory">Higher rates of accidents</span>
                </div>
            </div>
        </div>
      </div>
  );
}
