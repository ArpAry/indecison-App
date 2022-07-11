class Indecisionapp extends React.Component{
    constructor(props){
        super(props);
        this.deletethisoption=this.deletethisoption.bind(this);
        this.handlepick=this.handlepick.bind(this);
        this.submitHandle=this.submitHandle.bind(this);
        this.deleteoneoption=this.deleteoneoption.bind(this);
        this.state={
            optionsbyuser: props.byuser
        };
    }    
    deletethisoption()
    {
        // this.setState(() =>{
        //  return  {
        //     optionsbyuser:[]
        // }}
        // )
        this.setState(()=>({optionsbyuser:[]}))
    }
    deleteoneoption(removeoneoption){
        this.setState((prevobj)=>({optionsbyuser:prevobj.optionsbyuser.filter((option)=>removeoneoption!==option )}))
        //console.log("|sadjia");
    }
    componentDidMount()
    { 
        const json=localStorage.getItem('options');
        const option =JSON.parse(json);
        console.log(option);
    }
    componentDidUpdate(prevProps ,prevState)
    {
        try {
        if(prevState.optionsbyuser.length!==this.state.optionsbyuser.length)
        {
            const json=JSON.stringify(this.state.optionsbyuser);
            const options= localStorage.setItem('options',json);
         //   console.log(  localStorage.getItem('options'));
       if(options)
       {
           this.setState(()=>({optionsbyuser:options}))
       }
        }
        }
        catch(e)
        {
                    //if there is error do nothing
        }
    }
    submitHandle(objbyaddopt)
    {
        if(!objbyaddopt)
        return "Please Enter a Valid Option"
        else if(this.state.optionsbyuser.indexOf(objbyaddopt)>-1)
        return "This  Option Already Exists"
        else
        {
    //     this.setState((prevobj) =>{
    //         return {
    //             optionsbyuser:prevobj.optionsbyuser.concat([objbyaddopt])}
    // })}
    this.setState((prevobj) =>({optionsbyuser:prevobj.optionsbyuser.concat([objbyaddopt]) }))
    }}
    handlepick()
    { 
        this.setState((preobj) =>
      {
        let num=Math.floor(Math.random()*preobj.optionsbyuser.length);
        alert(preobj.optionsbyuser[num]);
        })
    }
    render()
    {
        const title="Indecision App";
        const subtitle="Put Yor lifein hands of computer";
        return(
            <div>
            <Header title={title} />
            <Action handlepick={this.handlepick} hasOptions={this.state.optionsbyuser.length>0}/>
            <Options  deletethisoption={this.deletethisoption} optionsbyuser={this.state.optionsbyuser}  deleteoneoption={this.deleteoneoption}/>
            <Addoption submitHandle={this.submitHandle} optionbyuser={this.state.optionsbyuser}/>
            </div>

        );
    }
    
};
Indecisionapp.defaultProps={
    byuser:['one','two']
}
const Header =(props)=>
{
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle ?<h2>{props.subtitle}</h2>:<h2>put your life in  hands of computer</h2>}
      
        </div>
    );
}
Header.defaultProps={
    title:"DECISION APP"
}

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// };

const Action=(props) => {
    return (
        <div>
            <button onClick={props.handlepick}
            disabled={!props.hasOptions} >
            What should i do ?</button>
        </div>
    );
}
// class Action extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handlepick}
//                 disabled={!this.props.hasOptions} >
//                 What should i do ?</button>
//             </div>
//         );
//     }
// };
const Options= (props)=>{
    return (
        <div>
        {props.optionsbyuser.length === 0 &&<p>" Add an Option Please "</p>}
        <button onClick={props.deletethisoption}>Remove All</button>
            {
                props.optionsbyuser.map((num) => <Option key={num} optionstext={num} deleteoneoption={props.deleteoneoption}  />  )  
            }
        
        </div>
    );

}
// class Options extends React.Component {
//     render()
//     {
//         return (
//             <div>
//             <button onClick={this.props.deletethisoption}>Remove All</button>
//                 {
//                     this.props.optionsbyuser.map((num) => <Option key={num} optionstext={num}  />  )  
//                 }
            
//             </div>
//         );
//     }
// };
const Option= (props)=>
{
    return(
        
        <div> 
        {props.optionstext}
        <button onClick={(e)=>{
         props.deleteoneoption(props.optionstext);}
        }
        >remove</button>
        </div>
        
    )
    
}

// class Option extends React.Component {
//     render(){
//         return(
//             <div> 
//             {this.props.optionstext}
//             </div>
            
//         )
//     }
// }
class Addoption extends React.Component{
    constructor(props)
    {
        super(props);
        this.submitHandle=this.submitHandle.bind(this);
        this.state={
            error:undefined
        }
    }
    submitHandle(e)
    {
        e.preventDefault();
       let newOption= e.target.elements.option.value.trim();
        const error=this.props.submitHandle(newOption); 
        // this.setState(()=>{
        //     return {
        //         error
        //       //  error:error
        //     }
        // })
        this.setState(()=>({error}))
        if(!error)
        {
            e.target.elements.option.value="";
        }
    
    };
    render() 
    {
        return (
            <div>
            {this.state.error && <p>{this .state.error}</p>}
            <form onSubmit={this.submitHandle}>
            <input  type="text" name="option"  />
            <button  >Add Option</button>
            </form>
            </div>
        );
    }
};

// const User= (props)=>
// {
//     return(
//         <div>
//         <h1>Name :{props.name}</h1>
//         <p>Age :{props.age} </p>
//         </div>

//     )

ReactDOM.render(<Indecisionapp byuser={['study','market']}/>,document.getElementById("app"));
