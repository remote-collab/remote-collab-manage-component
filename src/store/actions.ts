import { ActionContext, ActionTree } from "vuex";

import State from "./state";
import {MODAL_CLOSED, ROOM_GENERATED} from "@/store/mutations-types";

// @ts-ignore
import CustomEvent from "custom-event-js";
import { AdminBackendService } from "@/service/AdminBackendService";

const actions: ActionTree<State, State> = {

  createNewRoom({ commit }: ActionContext<State, State>, parameter: any): void {
    let backendService: AdminBackendService = new AdminBackendService();
    backendService
      .createNewRoom(parameter.sessionName, parameter.emails)
      .then(response => {
        if (response !== undefined) {
          console.log(response);
          // @ts-ignore
          let sessionId = response.data["uuid"];

          commit(ROOM_GENERATED, sessionId);
          CustomEvent.dispatch("ROOM_GENERATED", {
            name: parameter.sessionName,
            uuid: sessionId
          });
        }
      });
  },
  modalClosed({commit}: ActionContext<State, State>, parameter: any): void {
    commit(MODAL_CLOSED);
  }
};

export default actions;
