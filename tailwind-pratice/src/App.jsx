


function App(){


  return <div>
    {/*how to make it responsive*/}

      <div className="bg-red-500 text-center md:bg-blue-500 ">
          <div>
            Hello there
          </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-amber-300 rounded-2xl">hi</div>
        <div className="bg-blue-500 rounded-2xl">there</div>
        <div className="bg-red-500 rounded-2xl">its me</div>
      </div>
  

  </div>
}

export default App;