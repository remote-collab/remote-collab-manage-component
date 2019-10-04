import { ActionContext, ActionTree } from "vuex";

import State from "./state";
import {
  CLOSE_MODAL, INITIALIZED,
  ROOM_GENERATED,
  SHOW_MODAL
} from "@/store/mutations-types";

import { AdminBackendService } from "@/service/AdminBackendService";
import { EventService } from "@/service/EventService";
import store from "../store";

const actions: ActionTree<State, State> = {
  createNewRoom({ commit }: ActionContext<State, State>, parameter: any): void {
    let backendService: AdminBackendService = new AdminBackendService(store.getters.backendUrl);
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
  initialized({ commit }: ActionContext<State, State>, parameter: any): void {
    commit(INITIALIZED, parameter);
  },
  showAdminModal({ commit }: ActionContext<State, State>): void {
    commit(SHOW_MODAL);
  },
  closeAdminModalDialog({ commit }: ActionContext<State, State>): void {
    commit(CLOSE_MODAL);
  }
};

export default actions;
