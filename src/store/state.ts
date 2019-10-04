export default class State {
  public roomUUID: string;
  public showModal: boolean;
  public backendUrl: string;

  constructor() {
    this.roomUUID = "";
    this.showModal = false;
    this.backendUrl = "";
  }
}
