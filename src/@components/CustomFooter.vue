<template>
    <footer class="footer">
        <div class="footer__container content__container">
            <!-- <h1 class="footer__title">Product</h1>
            <ul class="footer__list">
                <li>
                    <a href="#" class="footer__link">About</a>
                </li>
                <li>
                    <a href="#" class="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#" class="footer__link">Testimonials</a>
                </li>
            </ul> -->
        </div>
    </footer>
</template>

<script>
export default {
    name: "CustomFooter",
    props: {
    },
    data: function () {
        return {
            
        };
    },
    created() {},
    computed: {
    }
};
</script>

<style lang="scss">

.footer {
    background-color: var(--container-color);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer__container {
    padding: 2rem 0 2rem;
}

.footer__title,
.footer__link {
    color: var(--title-color);
}

.footer__title {
    text-align: center;
    margin-bottom: var(--mb-2);
}

.footer__link {
    color: var(--title-color);
}

.footer__link:hover {
    color: var(--title-color-dark);
}

.footer__list {
    display: flex;
    justify-content: center;
    column-gap: 1.5rem;
    margin-bottom: var(--mb-2);
}

.footer__social {
    display: flex;
    justify-content: center;
    column-gap: 1.25rem;
}

.footer__social-link {
    background-color: var(--title-color);
    color: var(--container-color);
    font-size: 1.125rem;
    padding: 0.4rem;
    border-radius: 0.5rem;
    display: inline-flex;
}

.footer__social-link:hover {
    background-color: var(--title-color-dark);
}

.footer__copy {
    display: block;
    margin-top: 2.5rem;
    color: var(--title-color);
    text-align: center;
    font-size: var(--smaller-font-size);
}

@media only screen and (max-width: 992px) {
    .footer__social-link {
        padding: 0.25rem;
        border-radius: 0.25rem;
        font-size: 1rem;
    }
}

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 576px) {
}

@media only screen and (max-width: 350px) {
}

</style>