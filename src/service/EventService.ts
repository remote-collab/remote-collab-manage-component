import { EventBus } from "light-event-bus";

export class EventService {
  private eventBus: any;
  private subscriptions: any[] = [];

  private static instance: EventService | undefined;

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
    EventService.instance = this;
    const subscription = this.eventBus.subscribe("event", (arg: string) =>
      console.log(arg)
    );
  }

  public static getInstance() {
    if (this.instance === undefined) {
      this.instance = new EventService();
      this.instance.init();
    }
    return this.instance;
  }

  public disconnect() {
    //this.subscriptions.forEach(subscription => {
    //  this.eventBus.unsubscribe(subscription);
    //});
  }

  public sendMessage(type: string, payload: any) {
    this.eventBus.publish(type, payload);
  }

  public register(message: string, callback: Function) {
    const subscription = this.eventBus.subscribe(message, callback);
    this.subscriptions.push(subscription);
  }
}
