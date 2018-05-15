
//========================================================
// // ドットインストール #15〜
// ========================================================
(function(){
  'use strict';

  // Components
  var likeComponent = Vue.extend({
    props: {
      message:{
        type: String,
        default: 'Like'
      }
    },
    data:function(){
      return{
        count:0
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    methods: {
      countUp:function(){
        this.count++;
        this.$emit('increment');
      }
    }
  });

  var app = new Vue({
    el:'#app',
    components:{
      'like-component': likeComponent
    },
    data:{
      total:0
    },
    methods:{
      incrementTotal:function(){
        this.total++;

      }
    }
  });

})();





// ========================================================
// // ドットインストール #1-#14までのコード
// ========================================================

// (function(){
//   'use strict';// 厳密なエラーチェック
//
// // two way data binding (to UI)
// // ビューとUIを紐づける
//
//   var vm = new Vue({
//     el: '#app',
//     data: {
//       newItem: '',
//       todos: []// 空の配列にしておく
//
//       // todos:[]// todosがなかった場合の時。空配列にしてあげる
//     },
//     watch:{
//
//       todos:{
//         handler:function(){
//           localStorage.setItem('todos',JSON.stringify(this.todos));
//           // alert('Data saved!');
//         },
//         deep: true
//       }
//     },
//
//     mounted: function(){
//       this.todos = JSON.parse(localStorage.getItem('todos')) || [];
//     },
//
//     methods:{
//       addItem: function(){
//         var item = {
//           title: this.newItem,
//           isDone:false
//         };
//         this.todos.push(item);
//         this.newItem = '';// 入力フォームに値が残らないようにする。
//       },
//       deleteItem: function(index){
//         if (confirm('are you sure?')){
//             this.todos.splice(index, 1);// index番目から１個削除してよ。と書いてあげる。
//         }
//       },
//       purge: function(index){
//         if (!confirm('delete finished?')){
//           return;
//         }
//         this.todos = this.remaining;
//       }
//     },
//
//     // computedというキーを使って、データから動的にプロパティを計算してくれる算出プロパティを使ってみる。
//     computed:{
//       remaining: function(){
//
//         return this.todos.filter(function(todo){
//           return !todo.isDone;// まだ残っているタスクをrerutnする。それをフィルターして items にまだ終わっていないタスクだけを入れてくれる。
//         });
//       }
//     }
//
//
//
//   });
// })();// 即時関数で囲む
