import { MutationTree } from "vuex";

import State from "./state";
import {CLOSE_MODAL, ROOM_GENERATED, SHOW_MODAL} from "@/store/mutations-types";

const mutations: MutationTree<State> = {
  [ROOM_GENERATED](state: State, newRoomUUID: string): void {
    console.log("Set new roomUUID: " + newRoomUUID);
    state.roomUUID = newRoomUUID;
    state.showModal = false;
  },
  [CLOSE_MODAL](state: State): void {
    state.showModal = false;
  },
  [SHOW_MODAL](state: State): void {
    state.showModal = true;
  }
};

export default mutations;
