<template>
    <div class="header">
        <nav class="nav content__container">
            <a href="/" class="nav__logo">Jason</a>
            <div :class="navMenuClass">
                <ul class="nav__list grid">
                    <li class="nav__item"
                        v-for="option in options"
                        :key="option.id">
                        <div class="nav__link" :ref="option.ref" @click="scrollToView(option)">
                            <i class="uil nav__icon" :class="option.iconClass"></i>
                            {{ option.displayName }}
                        </div>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" @click="toggleMenu"></i>
            </div>

            <div class="nav__toggle">
                <i class="uil uil-apps" @click="toggleMenu"></i>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    name: "NavBar",
    props: {
        options: {type: Array, required: true, default() { return []; }}
    },
    data: function () {
        return {
            showMenu: false
        };
    },
    inject: ["goToView"],
    created() {},
    computed: {
        navMenuClass() {
            return this.showMenu ? "nav__menu show-menu" : "nav__menu";
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        scrollToView(option) {
            this.goToView(option.ref);
        }
    }
};
</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);
}

.nav {
    height: calc(var(--header-height) + 1.5rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
}

.nav__logo {
    font-size: var(--h3-font-size);
}

.nav__logo,
.nav__toggle {
    color: var(--title-color);
    font-weight: var(--font-medium);
}

.nav__list {
    display: flex;
    column-gap: 2rem;
}

.nav__item {
    cursor: pointer;
}

.nav__close,
.nav__toggle {
    display: none;
}

.nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--h3-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
    transition: all 300ms ease;
}

.nav__icon,
.nav__close,
.nav__toggle {
    display: none;
}

.nav__link:hover {
    color: var(--title-color-dark);
}

/* =============================== BREAKPOINTS =============================== */

@media only screen and (max-width: 768px) {
    .header {
        top: initial;
        bottom: 0;
    }

    .nav {
        height: var(--header-height);
    }

    .nav__menu {
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        background-color: var(--body-color);
        padding: 2rem 1.5rem 4rem;
        box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
        border-radius: 1.5rem 1.5rem 0 0;
        transition: .3s;
    }

    /* Show Menu */
    .show-menu {
        bottom: 0;
    }

    .nav__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .nav__icon {
        font-size: 1.2rem;
    }

    .nav__close {
        position: absolute;
        right: 1.3rem;
        bottom: .5rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--title-color);
    }

    .nav__close:hover {
        color: var(--title-color-dark);
    }

    .nav__toggle {
        font-size: 1.1rem;
        cursor: pointer;
    }

    .nav__icon,
    .nav__close,
    .nav__toggle {
        display: block;
    }
}

@media only screen and (max-width: 350px) {
    .nav__menu {
        padding: 2rem 0.25rem 4rem
    }

    .nav__list {
        column-gap: 0;
    }
}

</style>
