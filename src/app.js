import Vue from 'vue'
//import BlockList from './block-list.vue';

Vue.component('block-list', {
    props: ['site'],
    template:
        `<div>
        <input type="checkbox" v-model="site['doBlock']"> {{site.name}} <span v-if="site['doBlock'] === true"> : {{site.url}} is blocked.</span>
        </div>`
})

Vue.component('block-words', {
    props: ['word'],
    template:
        `<div>
        <input type="checkbox" v-model="word['doBlock']"> {{word.name}} <span v-if="word['doBlock'] === true"> : {{word.name}} is blocked.</span>
        </div>`
})

Vue.component('filetype-list', {
    props: ['filetype'],
    template:
        `<div>
        <input type="checkbox" v-model="filetype['doSpecify']"> {{filetype.name}} <span v-if="filetype['doSpecify'] === true"> : {{filetype.name}} is specified.</span>
        </div>`
})

var app = new Vue({
    el: '#app',
    data: {
        search_button_name: 'Search with Google',
        input_query: 'Search query',
        sites: [
            {
                name: 'stackoverrun',
                url: 'stackoverrun.com',
                doBlock: true
            },
            {
                name: 'code.i-harness',
                url: 'code.i-harness.com',
                doBlock: true
            },
            {
                name: 'CODE Examples',
                url: 'code-examples.net',
                doBlock: true
            },
            {
                name: 'CodeDay',
                url: 'codeday.me',
                doBlock: true
            }
        ],
        block_words: [
            {
                name: 'いかがでしたか',
                doBlock: true
            }
        ],
        filetypes: [
            {
                name: 'pdf',
                doSpecify: false
            }
        ]
    },
    methods:{
        search: function(){
            var query = "https://www.google.com/search?q=";
            query += this.input_query + this.search_query
            window.open(encodeURI(query), '_blank')
        }
    },
    computed: {
        search_query: function () {
            var query = "";
            this.sites.forEach(
                site => {
                    if (site.doBlock){
                        query += " -site:" + site.url;
                    }
                }
            );
            this.block_words.forEach(
                word => {
                    if (word.doBlock){
                        query += " -" + word.name;
                    }
                }
            );
            this.filetypes.forEach(
                filetype => {
                    if (filetype.doSpecify){
                        query += " filetype:" + filetype.name;
                    }
                }
            );
            return query;
        }
    }
})