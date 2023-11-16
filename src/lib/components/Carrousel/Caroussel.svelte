<script>
    export let data
    console.log(data)
</script>

<ul class="carousel">
    {#each data.uitleengeschiedenis1 as book}
        <li>
            <img src="{book.image.url}" alt="foto van {book.title}">
            <section class="rightside">
                <p>{book.title} / {book.author}</p>
                <p>{book.author}</p>
                <p>{book.category}</p>
                <div>
                    <p>{book.uitleendatum}</p>
                    <p>{book.inleverdatum}</p>
                </div>
            </section>
        </li>
    {/each}
</ul>

<style>

</style>