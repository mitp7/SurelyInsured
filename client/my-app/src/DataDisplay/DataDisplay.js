import "./DataDisplay.css";

export default function DataDisplay(props) {
  return (
      <div className="heading">
        <h1>Your location risks result in insurance rates being high/low because:</h1>
        <div className="dataDisplay">
            <div className="featuredData">
                <div className="dataInformation">
                    <span className="dataStatistics">{props?.data?.RelativeNumIncidents ? props.data.RelativeNumIncidents : ''}</span>
                    {
                      props?.data?.RelativeNumIncidents ? 
                        <img src={`/images/${props.data.RelativeNumIncidents > 0 ? 'green' : 'red'}_icon.png`} alt=""></img> 
                        : null
                    }
                    <span className="dataCatergory">{props?.data?.RelativeNumIncidentsConclusion ? props.data.RelativeNumIncidentsConclusion : '' }</span>
                </div>
            </div>

            <div className="featuredData">
                <div className="dataInformation">
                    <span className="dataStatistics">30%</span>
                    <img src="/images/red_icon.png" alt=""></img>
                    <span className="dataCatergory">{props?.data?.RelativeNumIncidentsConclusion ? props.data.RelativeNumIncidentsConclusion : '' }</span>
                </div>
            </div>

            <div className="featuredData">
                <div className="dataInformation">
                    <span className="dataStatistics">30%</span>
                    <img src="/images/green_icon.png" alt=""></img>
                    <span className="dataCatergory">{props?.data?.RelativeNumIncidentsConclusion ? props.data.RelativeNumIncidentsConclusion : '' }</span>
                </div>
            </div>

            <div className="featuredData">
                <div className="dataInformation">
                    <span className="dataStatistics">30%</span>
                    <img src="/images/red_icon.png" alt=""></img>
                    <span className="dataCatergory">{props?.data?.RelativeNumIncidentsConclusion ? props.data.RelativeNumIncidentsConclusion : '' }</span>
                </div>
            </div>
        </div>
      </div>
  );
}
