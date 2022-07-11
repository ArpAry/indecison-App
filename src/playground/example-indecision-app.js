const app={
    title:"Indecision App",
    subtitle:"Put Your life in hands of computer",
    option:[]
  };
  const onFormSubmit  = (e) =>
  {
    e.preventDefault();
   // const interest=e.target.form.option.value;
  const interest=e.target.elements.option.value;
    //console.log(interest);
  
    if(interest)
    {
      app.option.push(interest);
      e.target.elements.option.value='';
      render();
  
    }
  
  };
  const removeAllOption= () =>
  {
    app.option=[];
    render();
  
  };
  
  const appRoot=document.getElementById("app");
  
  const randomWork=()=>
  {
    let randomNum=Math.floor(Math.random()*app.option.length);
    alert(app.option[randomNum]);
  };
   const render= () =>
   {
    const template=(
      <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle} </p>
      <p>{app.option.length > 0 ?'Here are Your Options' :'No options'}</p>
      <button disabled={app.option.length ===0} onClick={randomWork}>What should I do ?</button>
      <button onClick={removeAllOption}> Remove All</button>
      <ol>
        {
          app.option.map((num)=>
          {
            return <li key={num}> work : {num} </li>
  
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" /> 
        <button > Add Option</button>
      </form>
      </div>
    )
    ReactDOM.render(template,appRoot);
   };
   render();