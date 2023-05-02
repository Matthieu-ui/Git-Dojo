
import './App.css'
import { Client } from 'appwrite';

const client = new Client();

client
    .setEndpoint('http://localhost/v1') // API Endpoint
    .setProject('64515005bc2802648835') // project ID
;






function App() {


  return (
    <>
      <h1>GitDojo</h1>

  


    </>
  )
}

export default App
