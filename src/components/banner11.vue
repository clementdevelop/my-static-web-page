<template>
  <div class="banner11-container1 thq-section-padding">
    <div class="banner11-max-width thq-section-max-width">
      <div class="banner11-container2">
        <h2 class="banner11-title thq-heading-2">
          <slot name="heading1">
            <!--Default content for heading1-->
            <div class="banner11-fragment3">
              <span class="banner11-text5">
                Transform Your Living Space with Style
              </span>
            </div>
          </slot>
        </h2>
        <h3 class="banner11-text1 thq-heading-3">
          <slot name="content1">
            <!--Default content for content1-->
            <div class="banner11-fragment1">
              <span class="banner11-text3">
                Discover curated design ideas and furniture options to create the
                home of your dreams.
              </span>
            </div>
          </slot>
        </h3>
      </div>
      <button type="button" class="thq-button-filled">
        <span>
          <slot name="action1">
            <!--Default content for action1-->
            <div class="banner11-fragment2">
              <span class="banner11-text4">Explore Our Services</span>
            </div>
          </slot>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner11',
  props: {},
}
</script>

<style scoped>
.banner11-container1 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  position: relative;
  align-items: center;
}
 
.banner11-max-width {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.banner11-container2 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.banner11-title {
  text-align: center;
}
 
.banner11-text1 {
  text-align: center;
}
 
.banner11-fragment1 {
  display: contents;
}
 
.banner11-text3 {
  display: inline-block;
}
 
.banner11-fragment2 {
  display: contents;
}
 
.banner11-text4 {
  display: inline-block;
}
 
.banner11-fragment3 {
  display: contents;
}
 
.banner11-text5 {
  display: inline-block;
}
</style>
