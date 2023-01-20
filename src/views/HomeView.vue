<script setup></script>

<template>
  <!-- <router-link to="/login"> Login</router-link> -->
  <Card>
    <template #header>
      <div class="text-center logo">
        <h1>MM</h1>
        <h3>FOAM</h3>
        <p>WAKE UP POSITIVE</p>
      </div>
    </template>

    <template #content> </template>
    <template #footer>
      <span class="p-float-label">
        <InputText
          id="email"
          type="email"
          autocomplete="off"
          placeholder="Email"
          v-model="email"
        />
        <label for="username">Email</label>
      </span>
      <span class="p-float-label">
        <InputText
          id="password"
          type="password"
          autocomplete="off"
          placeholder="Password"
          v-model="password"
        />
        <label for="username">Password</label>
      </span>
      <Button label="LOGIN" type="submit" @click="login"></Button>

      <p>
        You don't have an account?
        <router-link to="/signUp"> Sign up</router-link>
      </p>
    </template>
  </Card>
</template>
<style>
.logo {
  text-align: center;
}
</style>
