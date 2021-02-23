import {MainNav, Footer} from "./components/ui";

function App() {
  return (
      <>
          <MainNav/>
          <div className="p-24">
              <h1 className="text-4xl">Welcome to ASIC IP Finder</h1>
          </div>
          <Footer/>
      </>
  );
}

export default App;
