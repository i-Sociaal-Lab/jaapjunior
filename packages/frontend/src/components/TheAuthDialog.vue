<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ref } from "vue";

const emit = defineEmits<{
	login: [password: string];
}>();
const password = ref<string>("");
</script>

<template>
	<Dialog>
		<DialogContent
			class="sm:max-w-[425px]"
			:closeable="false"
			:disableOutsidePointerEvents="true"
			:trapFocus="true"
			@pointerDownOutside="(e) => e.preventDefault()"
			@escapeKeyDown="(e) => e.preventDefault()"
		>
			<DialogHeader>
				<DialogTitle>Inloggen</DialogTitle>
			</DialogHeader>
			<form
				id="login"
				@submit="
					(e) => {
						e.preventDefault();
						emit('login', password);
					}
				"
			>
				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="password" class="text-right"> Wachtwoord </Label>
						<Input id="password" v-model="password" class="col-span-3" />
					</div>
				</div>
			</form>
			<DialogFooter>
				<Button type="submit" for="login"> Inloggen </Button>
			</DialogFooter>
		</DialogContent>
	</Dialog>
</template>
