import axios from "axios";

const getAllPlans = (setPlan) => {
    axios.get("https://weekly-planner-r2vf.onrender.com")
    .then(({data}) => {console.log(data)
    setPlan(data)})

}

const addPlan = (title, setTitle, setPlan) => {
    axios.post("https://weekly-planner-r2vf.onrender.com/savePlan",{title})
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllPlans(setPlan)

    })
}

const editPlan = (planId, title, setTitle, setPlan, setEditing) => {
    axios.post("https://weekly-planner-r2vf.onrender.com/editPlan",{_id:planId, title})
    .then((data) => {
        console.log(data);
        setTitle("");
        setEditing(false);
        getAllPlans(setPlan)
    })
}

const deletePlan = (_id, setPlan) => {
    axios.post("https://weekly-planner-r2vf.onrender.com/deletePlan",{_id})
    .then((data) => {
        console.log(data)
        getAllPlans(setPlan)
    })
}



export{getAllPlans, addPlan, editPlan, deletePlan}