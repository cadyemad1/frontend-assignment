import { FunctionComponent,useState} from "react";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  handleSearch:(value:string) => void
}

const Input: FunctionComponent<InputProps> = ({handleSearch}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange= (e:React.ChangeEvent<HTMLInputElement>) =>{ 
  setInputValue(e.target.value);
  handleSearch(e.target.value);
  }

  return (
    <>
     <label>Search Input: </label>
     <input value={inputValue} onChange={(e)=>handleInputChange(e)}/>
    </>
  );
};

export default Input;
