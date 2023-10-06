<script>
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStat from "./components/FeedbackStat.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";

  let feedback = [
    {
      id: 1,
      rating: 10,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, alias? This is the first task",
    },

    {
      id: 2,
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, alias? This is the second task",
    },

    {
      id: 3,
      rating: 9,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, alias? This is the third task",
    },
  ];

  $: count = feedback.length;
  $: average = feedback.reduce((a, { rating }) => a + rating, 0) / count;

  const deleteFeedback = (e) => {
    feedback = feedback.filter((userId) => userId.id !== e.detail);
  };

  const handleNewFeedback = (e) => {
    const newFeedback = e.detail;
    feedback = [newFeedback, ...feedback];
  };
</script>

<main class="container">
  <FeedbackForm on:new-feedback={handleNewFeedback} />
  <FeedbackStat {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style>
  main {
    padding: 1em;
    margin: 0 auto;
  }
</style>
