import Functional_component from "./Functional_component"
import Class_component from "./Class_component"
import Props_ex from "./Props_ex";
import State_ex from "./State_ex";
import Conditionals from "./Conditionals";
import List_map from "./List_map";
import Form from "./Form.js";
import Use_state_hook from "./Use_state_hook.js";
import Use_effect_hook from "./Use_effect_hook.js";

function App() {
  const class_component = new Class_component("Class_Component");
  return (
    <div>
        <Functional_component/><hr></hr>
        <h1>{class_component.display()}</h1><hr></hr>
        <Props_ex name = "Props"/><hr></hr>
        <State_ex/><hr></hr>
        <Conditionals/><hr></hr>
        <List_map/><hr></hr>
        <Form/><hr></hr>
        <Use_state_hook/><hr></hr>
        <Use_effect_hook/><hr></hr>
    </div>
  );
}

export default App;
