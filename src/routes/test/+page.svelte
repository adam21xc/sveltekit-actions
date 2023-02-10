<script>

export let data;
export let form
</script> 
<form method="POST" action="?/create" class="w-full flex flex-col">
    <input type="text" name="name" value={form?.name ?? ''} placeholder='name'
    class="input input-primary input-bordered w-full max-w-xs"/> 
    <input type="email" name="email" value={form?.email ?? ''} 
    class="input input-primary input-bordered w-full max-w-xs" placeholder='email'>  
    <button class="mt-4 btn btn-primary w-full max-w-xs">Add</button>
    <!-- {#if form?.error}
        <Alert message={form?.message} />
    {/if} -->
</form>