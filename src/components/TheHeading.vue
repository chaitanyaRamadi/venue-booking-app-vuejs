<template>
    <div class="banner">
        <slot></slot>
        <div class="underline"></div>
    </div>
</template>


<style scoped>
.banner{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: max-content;
    gap: .5rem;
}
.underline {
    background-color: #2979FF;
    height: 5px;
    width: 60%;
    text-align: center;
}
</style>