<template>
	<header id="header">
		<h2>问卷管理</h2>
		<router-link tag="h3" to="/">我的问卷</router-link>
    <h3 @click="$router.push({name: 'editQuestionnaire', params: {id: 0}})">新建问卷</h3>
	</header>
</template>

<script>
	export default {
		name: 'header'
	}
</script>

<style>
	#header {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 5rem;
		background-color:#ee7419;
		color: #fff;
	}

	#header h2 {
		margin: 0 5rem 0 6rem;
		font-size: 1.8rem;
	}

	#header h2:before {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		line-height: 2rem;
		margin-right: .5rem;
		content: "?";
		color: #ee7419;
		text-align: center;
		background-color: #fff;
		border-radius: 50%;
	}

	#header h3 {
    margin: 0 5rem 0 2rem;
    font-size: 1.2rem;
		cursor: pointer;
	}
</style>
