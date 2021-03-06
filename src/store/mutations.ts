import { MutationTree } from "vuex";

import State from "./state";
import {CLOSE_MODAL, INITIALIZED, ROOM_GENERATED, SHOW_MODAL} from "@/store/mutations-types";

const mutations: MutationTree<State> = {
  [ROOM_GENERATED](state: State, newRoomUUID: string): void {
    console.log("Set new roomUUID: " + newRoomUUID);
    state.roomUUID = newRoomUUID;
    state.showModal = false;
  },
  [CLOSE_MODAL](state: State): void {
    state.showModal = false;
  },
  [INITIALIZED](state: State, paramater: any): void {
    if (paramater.backendUrl !== undefined && paramater.backendUrl !== "") {
      state.backendUrl = paramater.backendUrl;
    } else {
      state.backendUrl = "https://" + location.hostname + ":5000" + "/api/v1";
    }
    console.log("Initialized." + state.backendUrl);
  },
  [SHOW_MODAL](state: State): void {
    state.showModal = true;
  }
};

export default mutations;
