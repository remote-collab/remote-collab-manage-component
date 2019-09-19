import { MutationTree } from "vuex";

import State from "./state";
import {MODAL_CLOSED, ROOM_GENERATED} from "@/store/mutations-types";

const mutations: MutationTree<State> = {
  [ROOM_GENERATED](state: State, newRoomUUID: string): void {
    console.log("Set new roomUUID: " + newRoomUUID);
    state.roomUUID = newRoomUUID;
    state.hideModal = true;
  },
  [MODAL_CLOSED](state: State): void {
    state.hideModal = false;
  }
};

export default mutations;
