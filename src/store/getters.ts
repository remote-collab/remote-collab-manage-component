import { GetterTree } from "vuex";

import State from "./state";

// GetterTree<[current state], [root state]>
const getters: GetterTree<State, State> = {

  roomUUID(state: State): string {
    return state.roomUUID;
  },
  backendUrl(state: State): string {
    return state.backendUrl;
  },
  showModal(state: State): boolean {
    return state.showModal;
  }
};

export default getters;
