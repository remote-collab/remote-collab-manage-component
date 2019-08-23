import { Email } from "@/model/email";

export class Members {
  emails: Email[] = [new Email(0, "")];
  invalidEmails: boolean = false;
}
