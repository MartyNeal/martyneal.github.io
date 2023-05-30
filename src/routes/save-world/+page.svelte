<script>
    console.log("Hello world");
    let count = 0;
    function join() {
        console.log("Join us");
        count++;
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
</svelte:head>
<div class="container">
    <div class="section">
        <h1>About us</h1>
        <p>We are trying to get kids around the world to join us. Us {count} are the first ones. First we will be talking
            about Africa. See other pages for more information.</p>
        <button on:click={join}>
            Join
        </button>
    </div>


    <div class="section">
        <h1>
            Let's talk about problems in Africa
        </h1>
        <ul>
            <li>
                <h2>Water</h2>
                <p>Water is a big problem in Africa. People have to walk for hours to get water. And the water is not
                    clean. We are trying to help them by building wells. We are also trying to get them water filters.
                </p>
            </li>
            <li>
                <h2>Food</h2>
                <p>Food is also a big problem in Africa. People are starving. We are trying to help them by giving them
                    food. We are also trying to teach them how to grow food.</p>
            </li>
            <li>
                <h2>Education</h2>
                <p>Education is also a big problem in Africa. Many kids don't go to school. We are trying to help them
                    by building schools. We are also trying to get them books.</p>
            </li>

        </ul>
        <a href="/save-world/pros-and-cons">pros and cons.</a>
    </div>
</div>

<style>
    :global(*) {
        font-family: 'Poppins', sans-serif;
        caret-color: transparent;
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

    li:hover p {
        transform:scale(1.02);
    }

    button{
        background-color: rgb(75, 248, 75);
        border: 1px solid black;
        font-size: 150%;
        font-weight: bold;
        color: white;
        padding: 5px 32px;
        -webkit-text-stroke-width: .1px;
        -webkit-text-stroke-color: black;
        cursor: pointer;
    }
</style>

