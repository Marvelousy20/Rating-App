<script>
  import { v4 as uuidv4 } from "uuid";
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import RatingSelect from "./RatingSelect.svelte";
  import { FeedbackStore } from "../stores";

  let text = "";
  let isDisabled = true;
  let min = 10;
  let message;
  let rating = 10;
  let newFeedback;

  const handleInput = () => {
    if (text.trim().length < min) {
      message = "text must be at least 10 characters";
      isDisabled = true;
    } else {
      message = "";
      isDisabled = false;
    }
  };

  const handleSelect = (e) => {
    rating = e.detail;
  };

  const handleSubmit = () => {
    if (text.trim().length > min) {
      newFeedback = {
        id: uuidv4(),
        text,
        rating: +rating,
      };

      FeedbackStore.update((currentFeedback) => {
        return [...currentFeedback, newFeedback];
      });

      text = "";
    }
  };
</script>

<Card>
  <div class="cont">
    <header>
      <h2>How would you love to rate your service with us?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
      <RatingSelect on:rating-select={handleSelect} />
      <div class="input-group">
        <input
          type="text"
          bind:value={text}
          on:input={handleInput}
          placeholder="Tell us something that keeps you coming back"
        />
        <Button type="submit" disabled={isDisabled}>Send</Button>
      </div>

      {#if message}
        <div class="message">
          {message}
        </div>
      {/if}
    </form>
  </div>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
    text-align: center;
  }
</style>
