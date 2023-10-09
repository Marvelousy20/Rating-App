<script>
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStat from "./components/FeedbackStat.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";

  let feedback = [];

  // const handleNewFeedback = (e) => {
  //   const newFeedback = e.detail;
  //   feedback = [newFeedback, ...feedback];
  // };
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStat />
  <FeedbackList {feedback} />
</main>

<style>
  main {
    padding: 1em;
    margin: 0 auto;
  }
</style>
