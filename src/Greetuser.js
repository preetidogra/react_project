export const Greetuser = (props) => {

    const showAlert = () => {
        alert(Math.random())
    }


return(
    <div>

    <h1 onClick={() => showAlert()}> 
    Welcome to my site {props.name}  
    </h1>
      
      

    </div>
)


}