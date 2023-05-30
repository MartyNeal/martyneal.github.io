<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
</svelte:head>
<div class="container">
    <div class="section">
        <h1>Pros</h1>
        <ul>
            <li>
            <li>
            <li>
            <li>
            <li>
        </ul>
    </div>
    <div class="section">
        <h1>
            Cons
        </h1>
        <ul>
            <li>
            <li>
            <li>
            <li>
            <li>
        </ul>
    </div>
</div>

<style>
    :global(*) {
        font-family: 'Poppins', sans-serif;
    }

    :global(body) {
        background-color: #f0f0f0;
    }

    p {
        color: blue;
    }

    ul {
        color: red
    }

    h2 {
        color: black;
    }

    div.section {
        border: 1px solid black;
        padding: 20px;
        width: 70ch;
        margin: 100px;
        border-radius: 1rem;
        box-shadow: 0 0 10px yellow;
    }

    div.container {
        display: flex;
        flex-direction: row;
        align-items: start;
    }
</style>

