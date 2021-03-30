<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <!-- {{ $route.name }} access the name in the routes.js file for each route
          to display it at the top of the page  -->
          <span class="gt-sm">{{ $route.name }}</span>
           <q-icon  
      name="coronavirus"
      size="sm"
      color="primary"
      class="q-pa-md lt-md header-icon"
       />
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer 
    show-if-above 
    v-model="left" 
    side="left" 
    bordered
    :width="283"
    >

    <!-- Miner Icon  -->
      <q-icon  
      name="coronavirus"
      size="lg"
      color="primary"
      class="q-pa-md"
       />
        <q-list>

          <!-- Home left navbar  -->
      <q-item 
      to="/"
      clickable 
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon name="home" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
      </q-item>

      <!-- Explore left navbar  -->
       <q-item 
      to="/explore"
      clickable 
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon name="tag" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Explore</q-item-section>
      </q-item>

      <!-- Notifications left navbar  -->
       <q-item 
      to="/notifications"
      clickable 
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon name="notifications_none" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Notifications</q-item-section>
      </q-item>

       <q-item 
      to="/messages"
      clickable 
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon name="mail_outline" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Messages</q-item-section>
      </q-item>

       <q-item 
      to="/bookmarks"
      clickable 
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon name="turned_in_not" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Bookmarks</q-item-section>
      </q-item>

       <q-item 
      to="/lists"
      clickable 
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon name="list_alt" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Lists</q-item-section>
      </q-item>

       <q-item 
      to="/profile"
      clickable 
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon name="person_outline" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Profile</q-item-section>
      </q-item>

       <q-item 
      to="/more"
      clickable 
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon name="control_point" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">More</q-item-section>
      </q-item>

    </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
     <q-input 
     placeholder='Search'
     dense
     outlined
     rounded
     class="q-ma-md"
     v-model="text"
     >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

<q-list 
separator
padding
>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Education</q-item-label>
          <q-item-label class="text-weight-bold">Something amazing happened!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Education</q-item-label>
          <q-item-label class="text-weight-bold">Something amazing happened!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Education</q-item-label>
          <q-item-label class="text-weight-bold">Something amazing happened!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Education</q-item-label>
          <q-item-label class="text-weight-bold">Something amazing happened!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Education</q-item-label>
          <q-item-label class="text-weight-bold">Something amazing happened!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
</q-list>

    </q-drawer>

    <q-page-container>
      <keep-alive>
      <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>

<style lang="sass">
.header-icon 
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
