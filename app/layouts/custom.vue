<template>
  <div>
    <header>
      <slot name="header">
        Standard custom header content not modified during instantiation
      </slot>


      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Contact</NuxtLink>
          </li>
        </ul>
      </nav>


    </header>
    <main>
    <slot />
  </main>
</div></template>
  