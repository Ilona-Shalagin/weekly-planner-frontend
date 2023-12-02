import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export const MyPlans = ({text, updatingInInput, deletePlan}) => {
    return(
        <div>
            <p>{text}</p>
            <CiEdit onClick = {updatingInInput} />
            <MdDelete onClick = {deletePlan}/>

        </div>
    )
}