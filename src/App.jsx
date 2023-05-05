import Header from "./components/Header"
import Card from "./components/Card"
import Data from "./Data";

const cards = Data.map((item) => {
  return (
    <Card
      {...item}
    />
  );
});

function App() {
  return (
    <>
     <Header/>
     <section>{cards}</section>
   
    </>
  )
}

export default App
