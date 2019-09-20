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
      >Create new</md-button
    >
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */

import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import AddMemberComponent from "@/components/AddMemberComponent.vue";
import { Members } from "@/model/members";
import Getter from "@/decorators/Getter";

@Component({
  components: {
    AddMemberComponent
  }
})
export default class AddRoomComponent extends Vue {
  private members = new Members();

  sessionName: string = "";

  @Prop()
  closeMethod: Function | undefined;
  @Getter("hideModal")
  hideModal: boolean | undefined;

  constructor() {
    super();
  }

  createRoom() {
    this.$store.dispatch("createNewRoom", {
      sessionName: this.sessionName,
      emails: this.members.emails
    });
  }

  @Watch("hideModal")
  onPropertyChanged(hideModal: boolean) {
    if (hideModal) {
      this.close();
    }
  }

  close() {
    this.$store.dispatch("modalClosed");

    if (this.closeMethod !== undefined) {
      this.closeMethod();
    }
  }
}
</script>
