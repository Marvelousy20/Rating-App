<script>
  import { FeedbackStore } from "../stores";
  $: count = $FeedbackStore.length;
  $: average = $FeedbackStore.reduce((a, { rating }) => a + rating, 0) / count;
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
