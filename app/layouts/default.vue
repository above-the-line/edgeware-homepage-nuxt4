<template>
  <TheHeader />
  <div class="wrapper">
    <div>
      <slot />
    </div>
  </div>
  <TheFooter />
</template>


<style>
.wrapper {
  display: block;
  height: 100%;
}
</style>
  