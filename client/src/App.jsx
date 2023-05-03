import React from 'react';
import GitConsole from './components/GitConsole';


function App() {
  return (
<>
<div className="container max-w-xl mx-auto px-4">
  <div className="flex-row justify-space-between">
    <div className="flex mx-auto my-3">
      <h1 className="font-weight-normal text-4xl">
        Git Console 
      </h1>
    </div>
  </div> 
  <div className="flex-row justify-space-between mx-auto p-5 mx-auto">
    <div className="flex mx-auto my-3 w-full sm:w-full md:w-full lg:w-full xl:w-full">
      <GitConsole />
    </div>
  </div>
</div>


</>
  );
}

export default App;