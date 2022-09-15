import { FunctionComponent } from "react";

// Components
import Item from "./Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  items:string[]
}

const List: FunctionComponent<ListProps> = ({items}:ListProps) => {
  return <ul>{items.map((item:string) =><Item item={item} key={item}/> )}</ul>
};

export default List;
