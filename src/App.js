
import { useEffect, useState } from 'react';
import './App.css';
import { MyPlans } from './MyPlans';
import { getAllPlans, addPlan, editPlan, deletePlan } from './FetchPlan';

function App() {

  const[myPlan, setPlan] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [planId, setPlanId] = useState("")

  useEffect( () => {
    getAllPlans(setPlan)
  },[])

  const updatingInInput = (_id, title) => {
    setEditing(true);
    setTitle(title);
    setPlanId(_id)
  }

  return (
    <div>
      <h1>Weekly Planner</h1>
      <input type = "text"
      placeholder = " Add a plan"
      value = {title}
      onChange = {(e) => setTitle(e.target.value)}/>

      <button disabled = {!title} onClick = {editing ? () => editPlan(planId, title, setTitle, setPlan, setEditing) 
        : () => addPlan(title, setTitle, setPlan)}>
          { editing ? "Edit" : "Add" }</button>

      {myPlan.map((plan) =><MyPlans text = {plan.title} key = {plan._id}
      updatingInInput = {() => updatingInInput(plan._id, plan.title)}
      deletePlan = { () => deletePlan(plan._id, setPlan)}/>
      )}
    </div>
  );
}

export default App;
