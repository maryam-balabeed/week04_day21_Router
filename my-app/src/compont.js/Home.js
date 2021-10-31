import {  useHistory } from "react-router-dom";

function Home(){
    const history = useHistory();
    const Click=()=>{
      
       history.goBack();
       

    }
    return(
        <div>
            <h1> Home </h1>
            <button  onClick={Click}> click here  </button>
        </div>
    )
}
export default Home;