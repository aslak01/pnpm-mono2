<script lang="ts">
	export let data: PageServerData;
</script>

{#each data.people as person}
	{person.person + ' ' + person.title}<br />
{/each}
