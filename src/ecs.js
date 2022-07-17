import {Engine} from "geotic";
import {Ally, Appearance, Combat, Description, Enemy, hasMoved, Health, Position, Action, Movement} from "./components"
import * as entities from "./entities"

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
engine.registerPrefab(entities.Being)
engine.registerPrefab(entities.Human)
engine.registerPrefab(entities.Structure)
engine.registerPrefab(entities.Zombie)
engine.registerPrefab(entities.Vertical)
engine.registerPrefab(entities.Horizontal)
engine.registerPrefab(entities.BottomLeft)
engine.registerPrefab(entities.BottomRight)
engine.registerPrefab(entities.TopLeft)
engine.registerPrefab(entities.TopRight)
engine.registerPrefab(entities.TLeft)
engine.registerPrefab(entities.TRight)
engine.registerPrefab(entities.SingleHorizontal)
engine.registerPrefab(entities.SingleVertical)
export default engine;