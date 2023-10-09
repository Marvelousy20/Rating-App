<script>
  import Card from "./Card.svelte";
  import { FeedbackStore } from "../stores";

  export let item;

  const handleDelete = (itemId) => {
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter((item) => item.id !== itemId);
    });
  };
</script>

<Card>
  <p class="rating">{item.rating}</p>
  <button class="cancel" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text">
    {item.text}
  </p>
</Card>

<style>
  .cancel {
    position: absolute;
    right: 5px;
    top: 0px;
    font-weight: bold;
    font-size: 18px;
    background: none;
    border: none;
  }
  .rating {
    position: absolute;
    left: -10px;
    top: -10px;
    background: orange;
    color: white;
    border-radius: 100%;
    height: 40px;
    width: 40px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
