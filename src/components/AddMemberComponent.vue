<template>
  <div class="addUser">
    <md-button @click="addNewMember" v-if="(members.emails.length === 0)" class="md-icon-button">
      <md-icon>add</md-icon>
    </md-button>
    <md-field
      v-bind:key="v.id"
      v-for="(v, index) in $v.members.emails.$each.$iter"
      :class="getValidationClass(v.email.email)"
    >
      <label>Email</label>
      <md-input
        type="email"
        name="email"
        id="email"
        autocomplete="email"
        v-model.trim="v.email.$model"
        @input="validate()"
      />
      <span class="md-error" v-if="!v.email.required"
        >The email is required</span
      >
      <span class="md-error" v-else-if="!v.email.email">Invalid email</span>
      <md-button @click="addNewMember" v-if="(members.emails.length < 5)" class="md-icon-button">
        <md-icon>add</md-icon>
      </md-button>
      <md-button
        v-if="index !== 0"
        @click="removeMember(v)"
        class="md-icon-button"
      >
        <md-icon>remove</md-icon>
      </md-button>
      <!--div class="validators">
        <pre>{{$v}}</pre>
      </div-->
    </md-field>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */

import { Component, Prop, Vue } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import { email } from "vuelidate/lib/validators";
import { Email } from "@/model/email";
import { Members } from "@/model/members";

@Component({
  mixins: [validationMixin],
  validations: {
    members: {
      emails: {
        $each: {
          email: {
            email
          }
        }
      }
    }
  }
})
export default class AddMemberComponent extends Vue {
  @Prop()
  private members!: Members;

  counter: number = 1;

  constructor() {
    super();
  }

  // noinspection JSUnusedGlobalSymbols
  mounted() {
    if (this.$v) {
      this.$v.members.$touch();
    }
    console.log("Length: " + this.members.emails.length);
  }

  // noinspection JSUnusedGlobalSymbols
  async validate() {
    this.$v.members.$touch();
    this.members.invalidEmails = this.$v.$invalid;
  }

  addNewMember() {
    this.members.emails.push(new Email(this.counter, ""));
    this.counter = this.counter + 1;
  }

  removeMember(email: any) {
    let position = this.members.emails.indexOf(email.$model);
    this.members.emails.splice(position, 1);
  }

  // noinspection JSMethodCanBeStatic
  getValidationClass(valid: boolean): string {
    if (valid) {
      return "";
    }
    return "md-invalid";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
