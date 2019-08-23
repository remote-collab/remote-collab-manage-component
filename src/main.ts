import Vue from "vue";
// @ts-ignore
import wrap from "@vue/web-component-wrapper";
import RemoteCollabAdminWebComponent from "@/RemoteCollabAdminWebComponent.vue";

const WrappedElement = wrap(Vue, RemoteCollabAdminWebComponent);
window.customElements.define("remote-collab-admin-component", WrappedElement);
