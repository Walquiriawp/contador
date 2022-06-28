import { useState } from "react";
import Button from "../Button";

const Card = () =>{

    const [valor, setValor]= useState(0)

    function adicionar (){
        setValor(valor +1)
    }
    
    function remover(){
        setValor(valor -1)
    }
    return (
        <div class="card">
        <div class="card-header">
          CONTADOR
        </div>
        <div class="card-body">
            
            <Button onclick={adicionar}>adicionar</Button>
            <Button onclick={remover}>remover</Button>
          
            <p>{valor}</p>
           
        </div>
</div>
    );
}

export default Card;