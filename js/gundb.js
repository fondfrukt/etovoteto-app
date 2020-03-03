const gun = new Gun('https://gun-vue.glitch.me/gun', 'http://192.168.1.5:4200/gun')

//

Vue.prototype.$bus = new Vue({
  data:{
    loggedIn:false,
    edit:false,
    auth:false,
    userProfile:false,
    search:'',
    selected:null,
    isSelected:false,
    tabs:1,
    show:{
      banned:false,
      bottom:true,
    },
    sort:{
      byName:true,
    },
    types:{
      words: {
        name:'words',
        link:'meanings',
        field:'letters',
      },
      meanings: {
        name:'meanings',
        link:'words',
        field:'text',
      }
    }
  },
  watch: {
    isSelected(val) {
      if (!val && this.selected) {
        this.selected=''
      }
    }
  },
});

const bus = Vue.prototype.$bus

bus.$on('select', (item) => {
  if(bus.selected==item) {
    bus.selected=''
    bus.isSelected=false
  } else {
    bus.selected=item;
    bus.isSelected=true
  }
})


Vue.prototype.$user = gun.user();
Vue.prototype.$state = Gun.state;
Vue.prototype.$getState = Gun.state.is;
Vue.prototype.$soul = Gun.node.soul;
Vue.prototype.$node = Gun.node.ify;

// const app = gun.get('etovoteto')
export default gun