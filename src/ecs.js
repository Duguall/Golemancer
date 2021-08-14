import {Engine} from "geotic";
import {Appearance, Combat, Description, Health, Position, Action, Movement, Enemy, Ally} from "./components"
import {Being, Human, Zombie} from "./entities"

//creating geotic engine
const engine = new Engine();
//associating components
engine.registerComponent(Ally)
engine.registerComponent(Appearance)
engine.registerComponent(Combat)
engine.registerComponent(Description)
engine.registerComponent(Enemy)
engine.registerComponent(Health)
engine.registerComponent(Position)
engine.registerComponent(Action)
engine.registerComponent(Movement)
//associating prefabs
engine.registerPrefab(Being)
engine.registerPrefab(Human)
engine.registerPrefab(Zombie)
export default engine;