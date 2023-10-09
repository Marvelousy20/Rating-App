<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  import { scale, fade } from "svelte/transition";
  import { FeedbackStore } from "../stores";
</script>

<main>
  {#each $FeedbackStore as item (item.id)}
    <div in:scale out:fade={{ duration: 500 }}>
      <FeedbackItem {item} />
    </div>
  {/each}
</main>
