import {Engine} from "geotic";
import {Ally, Appearance, Combat, Description, Enemy, hasMoved, Health, Position, Action, Movement} from "./components"
import {Being, Human, Structure, Zombie} from "./entities"

//creating geotic engine
const engine = new Engine();
//associating components
engine.registerComponent(Ally)
engine.registerComponent(Appearance)
engine.registerComponent(Combat)
engine.registerComponent(Description)
engine.registerComponent(Enemy)
engine.registerComponent(hasMoved)
engine.registerComponent(Health)
engine.registerComponent(Position)
engine.registerComponent(Action)
engine.registerComponent(Movement)
//associating prefabs
engine.registerPrefab(Being)
engine.registerPrefab(Human)
engine.registerPrefab(Structure)
engine.registerPrefab(Zombie)
export default engine;