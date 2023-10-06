<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  import { scale, fade } from "svelte/transition";

  export let feedback = [];
  console.log(feedback);
</script>

<main>
  {#each feedback as item (item.id)}
    <div in:scale out:fade={{ duration: 500 }}>
      <FeedbackItem {item} on:delete-feedback />
    </div>
  {/each}
</main>
