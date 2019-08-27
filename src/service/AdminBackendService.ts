
import axios, { AxiosResponse } from "axios";
import { Email } from "@/model/email";

// @ts-ignore
export class AdminBackendService {
  private OPENVIDU_SERVER_URL =
    "https://" + location.hostname + ":5000" + "/api/v1";

  public createNewRoom(
    sessionName: string,
    emails: Email[]
  ): Promise<AxiosResponse<string> | void> {
    console.log("Creating new room " + sessionName);

    const body = JSON.stringify({
      roomName: sessionName,
      emails: emails.map(item => item.email)
    });
    const headers = { "Content-Type": "application/json" };
    const config = { headers: headers };
    return axios
      .post(this.OPENVIDU_SERVER_URL + "/rooms", body, config)
      .catch(error => AdminBackendService.handleError(error));
  }

  private static handleError(error: any): void {
    // eslint-disable-next-line no-console
    console.error(error);
    // return observableThrowError(error);
  }
}
