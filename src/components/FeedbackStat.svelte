<script>
  export let average;
  export let count;
</script>

<main class="feedback-stack">
  <h3>{count} Ratings</h3>
  <h3>Rating average: {average}</h3>
</main>

<style>
  .feedback-stack {
    display: flex;
    justify-content: space-between;
  }
</style>
