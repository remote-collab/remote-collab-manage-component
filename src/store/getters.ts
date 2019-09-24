import { GetterTree } from "vuex";

import State from "./state";

// GetterTree<[current state], [root state]>
const getters: GetterTree<State, State> = {

  roomUUID(state: State): string {
    return state.roomUUID;
  },
  showModal(state: State): boolean {
    return state.showModal;
  }
};

export default getters;
