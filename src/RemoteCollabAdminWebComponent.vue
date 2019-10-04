<template>
  <div class="page-container" id="app">
    <md-button
      class="md-raised md-primary"
      @click="openCreateDialog"
      v-if="show_button"
      >Start new Session&nbsp;</md-button
    >
    <modal-component
      id="show-modal"
      v-if="showModal"
      inlineComponent="AddRoomComponent"
      @close="closeCreateDialog"
    ></modal-component>
    <input type="hidden" id="testing-code" :value="roomUUID" />
    <div v-if="roomUUID">
      Current RoomUUID: {{ roomUUID }}
      <md-button @click="copyTestingCode" class="md-icon-button">
        <md-icon>attach_file</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "./store";

// @ts-ignore
// noinspection TypeScriptCheckImport
import VueMaterial from "vue-material";
import ModalComponent from "@/components/ModalComponent.vue";
import Getter from "@/decorators/Getter";
import { EventService } from "@/service/EventService";
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
  @Prop({ type: Boolean, default: true }) private show_button!: boolean;
  @Prop() private backendurl!: string;

  @Getter("roomUUID") roomUUID: string | undefined;
  @Getter("showModal") showModal!: boolean;

  private eventService = new EventService();

  constructor() {
    super();
  }

  // noinspection JSUnusedGlobalSymbols
  mounted() {
    this.eventService.init();
    this.eventService.register("showAdminModal", this.openCreateDialog);
    RemoteCollabAdminWebComponent.addExternalCallApi();
    this.$store
      .dispatch("initialized", {
        userName: this.username,
        backendUrl: this.backendurl
      })
      .then(() => console.log("Event dispatched"));
  }

  static addExternalCallApi() {
    const plugin = document.createElement("script");
    plugin.setAttribute("lang", "js");
    plugin.text =
      "var remoteCollabAdmin = (function() {\n" +
      "    return {\n" +
      "        openDialog:function() {\n" +
      '            window.EventBus.publish("showAdminModal","");\n' +
      "        },\n" +
      "    }\n" +
      "}());\n";
    plugin.async = true;
    document.head.appendChild(plugin);
  }

  copyTestingCode() {
    const hiddenHelperElement = document.createElement("input");
    hiddenHelperElement.setAttribute("type", "text");
    hiddenHelperElement.setAttribute("value", this.roomUUID + "");
    document.body.appendChild(hiddenHelperElement);
    hiddenHelperElement.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Testing code was copied " + msg);
    } catch (err) {
      console.log("Oops, unable to copy");
    }

    /* unselect the range */
    hiddenHelperElement.setAttribute("type", "hidden");
    window.getSelection()!.removeAllRanges();
  }

  public openCreateDialog() {
    this.$store
      .dispatch("showAdminModal")
      .then(() => console.log("Event dispatched"));
  }
  public closeCreateDialog() {
    this.$store
      .dispatch("closeAdminModalDialog")
      .then(() => console.log("Event dispatched"));
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
