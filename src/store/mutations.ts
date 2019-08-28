import { MutationTree } from "vuex";

import State from "./state";
import { ROOM_GENERATED } from "@/store/mutations-types";

const mutations: MutationTree<State> = {
  [ROOM_GENERATED](state: State, newRoomUUID: string): void {
    console.log("Set new roomUUID: " + newRoomUUID);
    state.roomUUID = newRoomUUID;
  }
};

export default mutations;
