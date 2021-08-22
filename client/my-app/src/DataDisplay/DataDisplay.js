import "./DataDisplay.css";

export default function DataDisplay(props) {
  return (
    <>
      { 
        props.data ?
        <div className="heading">
          <h1>Based on location, your client's insurance premium should be relatively</h1>
          <h1 style={{display: 'inline', color: (props?.data?.UltimateConclusion && props.data.UltimateConclusion === 'Insurance rates are likely to decrease.' ? '#ff8383' : '#00ff80')}}>
            {props?.data?.UltimateConclusion && props.data.UltimateConclusion === 'Insurance rates are likely to decrease.' ? 'low' : 'high'}
          </h1>
          <div className="dataDisplay">

              <div className="featuredData">
                  <div className="dataInformation">
                      <span className="dataStatistics">{props?.data?.RelativeNumIncidents ? Math.round(props.data.RelativeNumIncidents * 100) + '%' : ''}</span>
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
                      <span className="dataStatistics">{props?.data?.RelativeMeanCumulativeDailyIdleTime ? Math.round(props.data.RelativeMeanCumulativeDailyIdleTime * 100) + '%' : ''}</span>
                      {
                        props?.data?.RelativeNumIncidents ? 
                          <img src={`/images/${props.data.RelativeMeanCumulativeDailyIdleTime > 0 ? 'green' : 'red'}_icon.png`} alt=""></img> 
                          : null
                      }
                      <span className="dataCatergory">{props?.data?.RelativeMeanCumulativeDailyIdleTimeConclusion ? props.data.RelativeMeanCumulativeDailyIdleTimeConclusion : '' }</span>
                  </div>
              </div>

              <div className="featuredData">
                  <div className="dataInformation">
                      <span className="dataStatistics">{props?.data?.RelativeMeanServiceTime ? Math.round(props.data.RelativeMeanServiceTime * 100) + '%' : ''}</span>
                      {
                        props?.data?.RelativeNumIncidents ? 
                          <img src={`/images/${props.data.RelativeMeanServiceTime > 0 ? 'green' : 'red'}_icon.png`} alt=""></img> 
                          : null
                      }
                      <span className="dataCatergory">{props?.data?.RelativeMeanServiceTimeConclusion ? props.data.RelativeMeanServiceTimeConclusion : '' }</span>
                  </div>
              </div>

              <div className="featuredData">
                  <div className="dataInformation">
                      <span className="dataStatistics">{props?.data?.RelativeSeverityScore ? Math.round(props.data.RelativeSeverityScore * 100) + '%' : ''}</span>
                      {
                        props?.data?.RelativeNumIncidents ? 
                          <img src={`/images/${props.data.RelativeSeverityScore > 0 ? 'green' : 'red'}_icon.png`} alt=""></img> 
                          : null
                      }
                      <span className="dataCatergory">{props?.data?.RelativeSeverityScoreConclusion ? props.data.RelativeSeverityScoreConclusion : '' }</span>
                  </div>
              </div>

          </div>
        </div>
      : null
      }
    </>
  );
}
