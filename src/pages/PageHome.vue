<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-height full-width">
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
         <q-input 
       bottom-slots 
       v-model="newMinerContent" 
       placeholder="What's happening?" 
       counter 
       maxlength="280" 
       autogrow
       class="new-mine"
       >
        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://avatars.githubusercontent.com/u/73396582?v=4">
          </q-avatar>
        </template>

      </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn 
          @click="addNewMine"
           unelevated 
           rounded 
           color="primary" 
           label="Mine" 
           no-caps
           :disable="!newMinerContent"
           class="q-mb-lg"
           />
      </div>
    </div>

    <q-separator
      size="10px"
      color="grey-2"
      class="divider"
     />

<q-list separator>

<transition-group
  appear
  enter-active-class="animated fadeIn slow"
  leave-active-class="animated fadeOut slow"
  >

      <q-item 
      v-for="mine in mines"
      :key="mine.id"
      class="q-py-md mine"
      >
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://avatars.githubusercontent.com/u/73396582?v=4">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Ryan McCutcheon</strong>
            <span class="text-grey-7"> @ryanmccutcheon
              <br class="lt-md">&bull; {{ mine.date | relativeDate }}
            </span>
            </q-item-label>
          <q-item-label class="mine-content text-body1">
            {{ mine.content }}
          </q-item-label>
          <div class="row justify-between q-mt-sm mine-icons">
            <q-btn 
            flat 
            size="sm"
            round 
            color="grey" 
            icon="chat_bubble_outline" 
            />
            <q-btn 
            flat 
            size="sm"
            round 
            color="grey" 
            icon="repeat" 
            />
            <q-btn 
            flat 
            size="sm"
            round 
            :color="mine.liked ? 'pink' : 'grey'" 
            :icon="mine.liked ? 'favorite' : 'favorite_border'"
            @click="toggleLiked(mine)"
            />
            <q-btn 
            @click="deleteMine(mine)"
            flat 
            size="sm"
            round 
            color="grey" 
            icon="delete_outline" 
            />
          </div>
        </q-item-section>

      </q-item>
</transition-group>
    </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from 'src/boot/firebase'
import { formatDistance } from 'date-fns'
// import func from 'vue-editor-bridge'
// the above threw an error, found answer to resolve the issue on StackOverflow

export default {
  name: 'PageHome',
  data(){
    return {
      newMinerContent: '',
      mines: [
        // {
        //   id: 'ID1',
        //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tenetur ab tempore dolor enim beatae rem dicta quidem amet ad? Laudantium repudiandae nemo maxime officia. Neque amet tenetur corrupti ea.',
        //   date: new Date(),
        //   liked: false
        // },
        // {
        //   id: 'ID2',
        //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tenetur ab tempore dolor enim beatae rem dicta quidem amet ad? Laudantium repudiandae nemo maxime officia. Neque amet tenetur corrupti ea.',
        //   date: new Date(),
        //   liked: true
        // }
      ]
    }
  },
  methods: {
    addNewMine() {
      let newMine = {
        content: this.newMinerContent,
        date: Date.now(),
        liked: false
      }
      // this.mines.unshift(newMine)
      db.collection('mines').add(newMine)
      .then(docRef => {
        console.log('Document written with ID:', docRef.id)
      })
      .catch(error => {
        console.error('Error adding document:', error)
      })
      this.newMinerContent = ''
    },
    deleteMine(mine) {
      db.collection('mines').doc(mine.id).delete().then(() => {
        console.log("Document successfully deleted!");
      }).catch(error => {
        console.error("Error removing document: ", error);
      });
    },
    toggleLiked(mine) {
      db.collection('mines').doc(mine.id).update({
        liked: !mine.liked
      })
      .then(() => {
        console.log('Document successfully updated')
      })
      .catch(error => {
        console.log('Error updating document:', error)
      })
    }
  },
  filters: {
    relativeDate(value){
      return formatDistance(value, new Date ())
    }
  },
  mounted() {
    db.collection('mines').orderBy('date')
    .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          let mineChange = change.doc.data()
          mineChange.id = change.doc.id
            if (change.type === 'added') {
                console.log('New mine: ', mineChange)
                this.mines.unshift(mineChange)
            }
            if (change.type === 'modified') {
                console.log('Modified mine: ', mineChange)
                let index = this.mines.findIndex(mine => mine.id === mineChange.id)
                Object.assign(this.mines[index], mineChange)
            }
            if (change.type === 'removed') {
                console.log('Removed mine: ', mineChange)
                let index = this.mines.findIndex(mine => mine.id === mineChange.id)
                this.mines.splice(index, 1)
            }
        })
    })
  }
}
</script>

<style lang="sass">
.new-mine
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.mine-content
  white-space: pre-line
.mine-icons
  margin-left: -5px
.mine:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
</style>