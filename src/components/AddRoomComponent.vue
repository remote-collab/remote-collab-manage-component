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
      >Create new&nbsp;</md-button
    >
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

@Component({
  components: {
    AddMemberComponent
  }
})
export default class AddRoomComponent extends Vue {
  private members = new Members();

  sessionId: string = "";
  sessionName: string = "";

  @Prop()
  closeMethod: Function | undefined;

  constructor() {
    super();
  }

  openSession() {
    // TODO
  }

  createRoom() {
    // TODO
    if (this.closeMethod !== undefined) {
      this.closeMethod();
    }
  }
}
</script>
