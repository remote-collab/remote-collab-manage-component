import Vue from "vue";
// @ts-ignore
import wrap from "@vue/web-component-wrapper";
import RemoteCollabManageComponent from "@/RemoteCollabManageComponent.vue";

const WrappedElement = wrap(Vue, RemoteCollabManageComponent);
window.customElements.define("remote-collab-manage-component", WrappedElement);
