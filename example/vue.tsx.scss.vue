<script setup lang="tsx"></script>
<template>
  <div>vue</div>
</template>
<style lang="scss">
$primary-color: #4caf50;
$padding: 16px;
$font-stack: "Roboto", sans-serif;

.navbar {
  background: $primary-color;

  ul {
    margin: 0;
    padding: 0;

    li {
      display: inline-block;

      a {
        color: white;

        &:hover {
          color: lighten($primary-color, 10%);
        }
      }
    }
  }
}

@mixin flex-center($dir: row) {
  display: flex;
  flex-direction: $dir;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center(column);
  padding: $padding;
}

%card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}

.profile {
  @extend %card;
  background: #fefefe;
}

.grid {
  width: 100% / 3;
  padding: $padding * 2;
  margin: ($padding + 4px);
}

// 字符串插值
$theme: dark;
.theme-#{$theme} {
  background: #000;
  color: #fff;
}

.color {
  background: adjust-hue($primary-color, 30deg);
  border-color: saturate($primary-color, 20%);
}
.math {
  width: percentage(0.25);
  font-size: round(15.8px);
}

$type: admin;

@if $type == user {
  .role {
    color: blue;
  }
} @else if $type == admin {
  .role {
    color: red;
  }
} @else {
  .role {
    color: gray;
  }
}

@for $i from 1 through 5 {
  .col-#{$i} {
    width: #{20% * $i};
  }
}

$colors: red, green, blue;

@each $color in $colors {
  .text-#{$color} {
    color: $color;
  }
}

$i: 1;
@while $i <= 3 {
  .item-#{$i} {
    top: 10px * $i;
  }
  $i: $i + 1;
}

@function rem($px) {
  @return $px / 16 * 1rem;
}

.text {
  font-size: rem(24);
}

@use "sass:color";
@use "sass:math";
@use "utils/mixins" as *;

.box {
  background: color.adjust($primary-color, $lightness: 10%);
  width: math.div(100%, 3);
}

@import "reset";
@import "variables";
@import "base";

%btn-shared {
  padding: 10px 20px;
  border-radius: 8px;
}
.btn-primary {
  @extend %btn-shared;
  background: $primary-color;
  color: white;
}

.card {
  &__header {
    font-weight: bold;
  }
  &__body {
    font-size: 1rem;

    &:hover {
      background: lighten($primary-color, 5%);
    }
  }
}
</style>
