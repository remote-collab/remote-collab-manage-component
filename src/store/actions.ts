import { ActionContext, ActionTree } from "vuex";

import State from "./state";
import {
  CLOSE_MODAL,
  ROOM_GENERATED,
  SHOW_MODAL
} from "@/store/mutations-types";

import { AdminBackendService } from "@/service/AdminBackendService";
import { EventService } from "@/service/EventService";

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
          EventService.getInstance().sendMessage("ROOM_GENERATED", {
            name: parameter.sessionName,
            uuid: sessionId
          });
        }
      });
  },
  showAdminModal({ commit }: ActionContext<State, State>): void {
    commit(SHOW_MODAL);
  },
  closeAdminModalDialog({ commit }: ActionContext<State, State>): void {
    commit(CLOSE_MODAL);
  }
};

export default actions;
