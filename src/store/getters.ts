import { GetterTree } from "vuex";

import State from "./state";

// GetterTree<[current state], [root state]>
const getters: GetterTree<State, State> = {

  roomUUID(state: State): string {
    return state.roomUUID;
  }
};

export default getters;
