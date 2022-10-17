import React from "react";
import search from '../../assets/icon/Vector.svg'
import {Input, Button} from '../../helpers/globalStyle';

type SearchTypes = {
    borderColor: string | undefined;
    buttonColor: string | undefined;
    color: string | undefined;

}

export const Search = (props: SearchTypes) => {

    return (
        <div  >
            <Input input='text'
                   placeholder='Search for product and brands'
                   borderColor={props.borderColor}
                   color={props.color}
            />
            <Button type="submit" buttonColor={props.buttonColor} 
                                  borderColor={props.borderColor}
            >
               <img src={search} alt="" />
            </Button>    
        </ div>
    )
}



