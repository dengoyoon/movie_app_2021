import React from "react";

// function component
// function App() {
//   return (
//     <div> 
//       <h1>Hello!!</h1>
//       {foodILike.map(renderFood)}
//     </div>
//   );
// }

// class component , for 'state'
class App extends React.Component{
  state = {
    isLoading: true
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading : false});
    }, 5000);
  }
  //'render()' is only function in React component
  render() {  // React excutes render method that my class component have
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading" : "We are ready"}
      </div>
    );
  }
}

export default App;
