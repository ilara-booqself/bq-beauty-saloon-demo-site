<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
	defineProps<{
		href?: string;
		label?: string;
		analyticsName?: string;
		isWidgetTrigger?: boolean;
	}>(),
	{
		href: '#book',
		label: 'Book an appointment',
		analyticsName: 'header_book_cta',
		isWidgetTrigger: false
	}
);

const isPressed = ref(false);
</script>

<template>
	<!-- Assign the widget trigger id only to the intended button instance. -->
	<button :id="isWidgetTrigger ? 'booqself-book' : undefined" type="button" class="book-button" :class="{ 'book-button--pressed': isPressed }">
		{{ label }}
	</button>
</template>

<style scoped>
.book-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.42rem 0.58rem;
	background: var(--color-button);
	color: var(--color-button-text);
	font-size: 0.5rem;
	text-transform: uppercase;
	letter-spacing: 0.14em;
	font-weight: 700;
	border: 1px solid color-mix(in srgb, var(--color-button-text) 20%, transparent);
	transition: transform 180ms ease, filter 180ms ease;
}

.book-button:hover,
.book-button:focus-visible {
	transform: translateY(-1px);
	filter: brightness(1.05);
}

.book-button--pressed {
	transform: scale(0.98);
}
</style>
