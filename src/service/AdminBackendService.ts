import CustomEvent from "custom-event-js";
import { Members } from "@/model/members";

export class AdminBackendService {
  public createNewRoom(sessionName: string, members: Members) {
    console.log("Creating new room");
    CustomEvent.dispatch("ROOM_GENERATED", { name: "name", uuid: "uuid" });
  }
}
