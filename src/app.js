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
            // 機械翻訳系
            {
                name: 'brasscoaching.de',
                url: 'brasscoaching.de',
                doBlock: true
            },
            {
                name: 'code adviser',
                url: 'code-adviser.com',
                doBlock: true
            },
            {
                name: 'CodeDay',
                url: 'codeday.me',
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
                name: 'codeflow',
                url: 'codeflow.site',
                doBlock: true
            },
            {
                name: 'it-swarm.dev',
                url: 'it-swarm.dev',
                doBlock: true
            },
            {
                name: 'it-swarm.net',
                url: 'it-swarm.net',
                doBlock: true
            },
            {
                name: 'kinderzirkus-sulzgries.de',
                url: 'kinderzirkus-sulzgries.de',
                doBlock: true
            },
            {
                name: 'kotaeta',
                url: 'kotaeta.com',
                doBlock: true
            },
            {
                name: 'living-sun.com',
                url: 'living-sun.com',
                doBlock: true
            },
            {
                name: 'not-working',
                url: 'src-bin.com',
                doBlock: true
            },
            {
                name: 'TutorialMore',
                url: 'https://tutorialmore.com',
                doBlock: true
            },
            {
                name: 'VoidCC',
                url: 'voidcc.com',
                doBlock: true
            },
            {
                name: 'stackoverrun',
                url: 'stackoverrun.com',
                doBlock: true
            },
            // tech camp 系
            {
                name: '侍エンジニア塾',
                url: 'sejuku.net',
                doBlock: true
            },
            {
                name: 'TECHACADEMY',
                url: 'techacademy.jp',
                doBlock: true
            },
            {
                name: 'CodeCamp',
                url: 'codecamp.jp',
                doBlock: true
            },
            {
                name: 'WEBCAMP NAVI',
                url: 'web-camp.io',
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
