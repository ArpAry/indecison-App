class Toggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.showOptions=this.showOptions.bind(this);
        this.state={
            visiblity:false
        };
    }
    showOptions()
    {
        this.setState((prevobj) => {
            return{
                    visiblity: !prevobj.visiblity
            }
        })


    }
    render()
    {
        return(
            <div>
                <h1>Toggle App</h1>
                <button onClick={this.showOptions}>{this.state.visiblity ? <p>hide options</p>:<p>show Options</p>}</button>
                {this.state.visiblity && <p>here are your options </p>}
            </div>
        )
    }
}
ReactDOM.render(<Toggle/>,document.getElementById("app"));
// const toggleOption={
//     title:"Toggle-App",
//     options:['one','two']
// };
// let visiblity=false;

// const togOption =()=>
// {
//  visiblity= !visiblity;
//  render();
// }

// const appRoot=document.getElementById("app");


//  const render =()=>
//  {
//     const template=(
//         <div>
//         <h1>{toggleOption.title}</h1>
//         <button onClick={togOption} >{visiblity ? " Hide Details" : "Show Details" } </button>
//         <p>{visiblity && ("Here are your Options")}</p>
//         </div>
//     );
//     ReactDOM.render(template,appRoot);

//  }
//  render();