<template>
  <div class="page-container" id="app">
    <h1>Create new screen sharing session</h1>

    <md-button class="md-raised md-primary" @click="openCreateDialog"
      >Start new Session&nbsp;</md-button
    >
    <modal-component
      id="show-modal"
      v-if="showModal"
      inlineComponent="AddRoomComponent"
      @close="showModal = false"
    ></modal-component>
    <div>Current RoomUUID: {{ roomUUID }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "./store";

// @ts-ignore
import VueMaterial from "vue-material";
// import AddRoomComponent from "@/components/AddRoomComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import Getter from "@/decorators/Getter";
Vue.use(VueMaterial);

@Component({
  store,
  components: {
    ModalComponent
  }
})
// @Component
export default class RemoteCollabAdminWebComponent extends Vue {
  @Prop() private username!: string;

  @Getter("roomUUID") roomUUID: string | undefined;

  private showModal = false;

  constructor() {
    super();
  }

  public openCreateDialog() {
    this.showModal = !this.showModal;
  }
}
</script>

<!-- Material theming -->
<style lang="scss">
@import "~vue-material/dist/vue-material.min.css";

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: #1c69d4,
    accent: md-get-palette-color(pink, 500)
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*,
:after,
:before {
  box-sizing: border-box;
}
</style>
