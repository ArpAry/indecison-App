class Counter extends React.Component {
  constructor(props)
  {
    super(props);
    this.addone=this.addone.bind(this);
    this.minusone=this.minusone.bind(this);
    this.reset=this.reset.bind(this);
    this.state= {
      count:0
    };
  }
  componentDidMount(){
    const stringCount =localStorage.getItem('count');
    const count =parseInt(stringCount,10);
    if(!isNaN(count))
    {
      this.setState(() => ({count :count}));
    }
  }

  componentDidUpdate(prevprop, prevstate){
    if(prevstate.count!==this.state.count)
    localStorage.setItem('count',this.state.count);
    console.log(localStorage.getItem('count'));
  }

  addone()
  {
    this.setState((prevState) =>
    {
      return {
        count:prevState.count+1
      }
    }
    )
  }

  minusone()
  { this.setState((prevobj) =>
    {
      return {
        count:prevobj.count-1
      }
    }
    )
  }

  reset() 
 {
    { this.setState(() => 
    { 
      return {
        count:0
      }
  } 
  ) }
 // this is alter  method  of setState() but it shows asynchronous 
  // this.setState({
  //   count:0
  // })
  // this.setState({
  //   count:this.state.count+1
  // })
  }
  
  render()
  {
    return(
    <div>
        <h1>Counter :{this.state.count} </h1>
        <button onClick={this.addone}>+1</button>
        <button onClick={this.minusone}>-1</button>
        <button onClick={this.reset}>Reset Button</button>
    </div>
    );
  }
  

}
// Counter.defaultProps={
//   bydefaultuser:1
// }
///always first call  the Counter.defultprops then value  goes to Counter class for change   
ReactDOM.render(<Counter  />,document.getElementById("app"));


// let count = 0;
// const addOne = () => {
//   count++;
//   console.log("Add One ", count);
//   renderCountApp();
// };
// const minusOne = () => {
//   count--;
//   console.log("Minus One ", count);
//   renderCountApp();
// };
// const resetFun = () => {
//   count = 0;
//   console.log("Reset Function ", count);
//   renderCountApp();
// };

// const appRoot = document.getElementById("app");

// const renderCountApp = function () {
//   const templateTwo = (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={resetFun}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCountApp();