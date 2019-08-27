<template>
  <div class="roomPage">
    <md-field>
      <label>Initial Value</label>
      <md-input
        v-model="sessionName"
        placeholder="Enter your session name"
        type="text"
      ></md-input>
    </md-field>
    <AddMemberComponent :members="members"></AddMemberComponent>
    <!--md-switch v-model="external">External</md-switch-->
    <md-button
      class="md-raised md-primary"
      @click="createRoom"
      :disabled="members.invalidEmails"
      >Create new&nbsp;&nbsp;</md-button
    >
    <md-button class="md-raised md-accent" @click="close">Close</md-button>
    <div v-if="sessionId !== ''">
      Token generated: {{ sessionId }}
      <md-button class="md-icon-button" @click="openSession">
        <md-icon>link</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */

import { Component, Prop, Vue } from "vue-property-decorator";

import AddMemberComponent from "@/components/AddMemberComponent.vue";
import { Members } from "@/model/members";
import { AdminBackendService } from "@/service/AdminBackendService";

// @ts-ignore
import CustomEvent from "custom-event-js";

@Component({
  components: {
    AddMemberComponent
  }
})
export default class AddRoomComponent extends Vue {
  private members = new Members();

  sessionId: string = "";
  sessionName: string = "";
  backendService: AdminBackendService = new AdminBackendService();

  @Prop()
  closeMethod: Function | undefined;

  constructor() {
    super();
  }

  openSession() {
    // TODO
  }

  createRoom() {
    this.backendService
      .createNewRoom(this.sessionName, this.members.emails)
      .then(response => {
        if (response !== undefined) {
          console.log(response);
          this.sessionId = response.data["uuid"];
          CustomEvent.dispatch("ROOM_GENERATED", { name: this.sessionName, uuid: this.sessionId });
        }
      });
  }

  close() {
    // TODO
    if (this.closeMethod !== undefined) {
      this.closeMethod();
    }
  }
}
</script>
