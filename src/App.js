import React from 'react'
import axios from 'axios'
import './App.css';

function App() {
  let [responseData, setResponseData] = React.useState('');

  React.useEffect(() => {
    axios({
      "method": "GET",
      "url": "https://picsum.photos/v2/list"
    })
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  const generateImageViews = (item) => <img height="150" className="Image" key={item.id} src={item.download_url}/>

  return (
    <div className="App">
      <div className="App-header">
        <div>Everyone's photos</div>
        <div style={{color: 'dodgerblue'}}>View all 2,724,700</div>
      </div>
      <div className="Image-Content">
      {responseData ? responseData.map(v => generateImageViews(v)): null}
      </div>
    </div>
  );
}

export default App;
