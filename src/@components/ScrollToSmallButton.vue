<template>
    <a class="scrollup" :class="showScrollClass" @click="scrollToView">
        <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>
</template>

<script>
export default {
    name: "ScrollToSmallButton",
    props: {
    },
    data: function () {
        return {
            
        };
    },
    inject: ["goToView"],
    created() {
        window.addEventListener("scroll", function() {
            const scrollUp = document.querySelector(".scrollup");

            if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
            else scrollUp.classList.remove("show-scroll");
        })
    },
    computed: {
        showScrollClass() {
            return window.scrollY >= 560 ? "show-scroll" : "";
        }
    },
    methods: {
        scrollToView() {
            this.goToView("home");
        }
    }
};
</script>

<style lang="scss" scoped>

.scrollup {
    position: fixed;
    right: 2.5rem;
    bottom: -20%;
    background-color: var(--title-color);
    opacity: 0.8;
    padding: 0.3rem 0.5rem;
    border-radius: 0.4rem;
    z-index: var(--z-tooltip);
    transition: .4s;
    cursor: pointer;
}

.scrollup__icon {
    font-size: 1.5rem;
    color: var(--container-color);
}

.scrollup:hover {
    background-color: var(--title-color-dark);
}

.show-scroll {
    bottom: 3rem;
}

</style>
