Vue.component('tabs', {
    template: `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{'is-active': tab.isactive }"  >
                    <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a> 
                </li>
            </ul>
        </div>

        <div class="tab-details">
            <slot></slot>
        </div>
    </div>
    `,
    data() {
        return {
            tabs: []
        }
    },
    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
         
            this.tabs.forEach(tab => {
                tab.isactive = (tab.name == selectedTab.name)
            });
        }
    }
})

Vue.component('tab', {
    template: `
        <div v-show="isactive"><slot></slot></div>
    `,
    props: {
        name: {required: true},
        selected: {default: false}
    },
    data() {
        return {
            isactive: false
        }
        
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-')
        }
    },
    mounted() {
        this.isactive = this.selected;
    }
})

new Vue({
    el: '#root',
    data: {
      hello: 'Cowboy'
    }
  })