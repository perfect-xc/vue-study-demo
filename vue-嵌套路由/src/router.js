import VueRouter from 'vue-router';
import Movie from './components/movie.vue';
import Music from './components/music.vue';
import Rihan from './components/subMovie/rihan.vue';
import Omei from './components/subMovie/Omei.vue';
import Guochan from './components/subMovie/guochan.vue';
import RihanMusic from './components/subMusic/rihanMusic.vue';
import OmeiMusic from './components/subMusic/omeiMusic.vue';
import GuochanMusic from './components/subMusic/guochanMusic.vue';



const router = new VueRouter({
  routes:[
    {path:'/',redirect:{name:'movie'}},
    {path:'/movie',component:Movie,name:'movie',children:[
      {path:'rihan',component:Rihan},
      {path:'omei',component:Omei},
      {path:'guochan',component:Guochan},

    ]},
    {path:'/music',component:Music,name:'music',children:[
      {path:'rihanMusic',component:RihanMusic,name:'rihanMusic'},
      {path:'omeiMusic',component:OmeiMusic,name:'omeiMusic'},
      {path:'guochanMusic',component:GuochanMusic,name:'guochanMusic'},
    ]},
  
  ],
});

export default router