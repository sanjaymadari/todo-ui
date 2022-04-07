<template>
  <div>
      <div class="content">{{ task.description }}</div>
      <div class="button">
          <!-- <button>{{ task.done ? 'Undo' : 'Done' }}</button> -->
          <button class="delete">Delete</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Todo',
    props: ['task']
}
</script>

<style>

</style>