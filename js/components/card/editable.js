// <contenteditable :value.sync="item.text"></contenteditable>

// https://stackoverflow.com/questions/53899676/vue-2-contenteditable-with-v-model

export default {
  props: {
    item: {
      type:Object,
    },
    property: {
      type: String,
      default: '',
    },
    selected: {
      type: Boolean,
      default:false,
    }
  },
  data() {
    return {
      editing: false
    }
  },
  template: `
    <span>
      <span :ref="item[property]" :contenteditable="editing"  @blur="resetTitle"  @keydown.enter.stop.prevent="updateTitle">
        {{item[property]}}
      </span> <v-btn v-if="$bus.edit && selected && !editing" @click="edit(item[property])" x-small icon><v-icon>mdi-pencil</v-icon></v-btn>
    </span>
  `,
  methods: {
    edit(ref) {
      this.editing=true;
      this.$nextTick(()=> {
        this.focus(ref)
      })
    },
    resetTitle() {
      this.$refs[this.item[this.property]].innerHTML=this.item[this.property];
      this.editing=false;
    },
    updateTitle (val) {
      this.editing=false;
      let prop = val.target.textContent.trim();
      val.target.innerHtml=prop;
      this.$gun.get(this.item.type).get(this.$soul(this.item)).put({[this.property]:prop, updatedAt:this.$state()}, (msg) => {
        this.$bus.$emit('notify', msg)
      })
    },
    focus(ref) {
      let el = this.$refs[ref];
      el.focus();
      if (typeof window.getSelection != "undefined"
         && typeof document.createRange != "undefined") {
           let range = document.createRange();
           range.selectNodeContents(el);
           range.collapse(false);
           let sel = window.getSelection();
           sel.removeAllRanges();
           sel.addRange(range);
         } else if (typeof document.body.createTextRange != "undefined") {
           let textRange = document.body.createTextRange();
           textRange.moveToElementText(el);
           textRange.collapse(false);
           textRange.select();
         }
    },
  },
}