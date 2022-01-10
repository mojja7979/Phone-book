import React,{ Component } from "react";
import PhoneForm from "./components/PhoneForm";

class App extends Component{
  onCreatetest = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <PhoneForm
        onCreate={this.onCreatetest}/>
      </div>
    )

    
  }
}

export default App;
