import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
  
    const goToProducts = () => {
      history.push("/products");
    };
    const goBack = () => {
      history.goBack();
    };
    const goForward = () => {
      history.goForward();
    };
  
    return (
      <div className="Home">
        <h1>Home</h1>
        <button onClick={goToProducts}> Go to Products</button>
        <button onClick={goBack}> Go Back</button>
        <button onClick={goForward}> Go Forward</button>
      </div>
    );
  }

  export default Home