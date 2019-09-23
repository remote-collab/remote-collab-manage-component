import { EventBus } from "light-event-bus";

export class EventService {
  private eventBus: any;
  private subscriptions: any[] = [];

  public init() {
    // noinspection TypeScriptUnresolvedVariable
    // @ts-ignore
    if (window.EventBus === undefined) {
      this.eventBus = new EventBus();
      // @ts-ignore
      window.EventBus = this.eventBus;
    } else {
      // @ts-ignore
      this.eventBus = window.EventBus;
    }
    const subscription = this.eventBus.subscribe("event", (arg: string) =>
      console.log(arg)
    );
  }

  public disconnect() {
    //this.subscriptions.forEach(subscription => {
    //  this.eventBus.unsubscribe(subscription);
    //});
  }

  public sendMessage(message: string) {
    this.eventBus.publish("event", "message");
  }

  public register(message: string, callback: Function) {
    const subscription = this.eventBus.subscribe(message, callback);
    this.subscriptions.push(subscription);
  }
}
