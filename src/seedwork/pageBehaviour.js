const pageBehaviour = {
    methods: {
        scrollToView(ref) {
            if (this.$refs[ref])
                this.$refs[ref].$el.scrollIntoView({ behavior: 'smooth' });
        }
    },
    computed: {

    }
}

export default pageBehaviour;