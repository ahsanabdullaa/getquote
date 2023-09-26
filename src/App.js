import Quote from "./components/Quote";
function App() {
  return (
    <div className="container bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen max-w-full flex flex-col ">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-slate-300 text-5xl font-serif">Quote App</h1>
      </div>
      <div className="text-center flex-1 self-center w-9/12">
        <Quote />
      </div>
    </div>
  );
}

export default App;
