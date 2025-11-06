<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
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

defineProps<{
	errorMessage?: string;
}>();

const emit = defineEmits<{
	login: [password: string];
	clearError: [];
}>();

const password = ref<string>("");
const open = defineModel<boolean>("open", { default: false });

// Focus password field when modal opens
watch(open, (isOpen) => {
	if (isOpen) {
		// Use nextTick and small delay to ensure modal animation completes
		nextTick(() => {
			setTimeout(() => {
				const passwordInput = document.getElementById("password") as HTMLInputElement;
				passwordInput?.focus();
			}, 100);
		});
	}
});
</script>

<template>
	<Dialog v-model:open="open">
		<DialogContent
			class="sm:max-w-[425px]"
			:closeable="false"
			:disableOutsidePointerEvents="true"
			@pointerDownOutside="(e) => e.preventDefault()"
			@escapeKeyDown="(e) => e.preventDefault()"
		>
			<DialogHeader>
				<DialogTitle>
					<div class="flex flex-col">
						Inloggen
						<span class="text-sm font-normal text-muted-foreground">
							We zitten nu nog in de gesloten testfase. Wil je ook testen, of
							wil je een vraag voor JaapJunior indienen? Dat kan
							<a
								href="https://podio.com/webforms/30328614/2551585"
								class="text-info underline"
								target="_blank"
								rel="noopener noreferrer"
								>hier</a
							>.
						</span>
					</div>
				</DialogTitle>
			</DialogHeader>
			<form
				id="login"
				@submit="
					(e) => {
						e.preventDefault();
						emit('login', password.trim());
					}
				"
			>
				<div class="grid gap-4 py-4">
					<div v-if="errorMessage" class="text-red-500 text-sm text-center">
						{{ errorMessage }}
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="password" class="text-right"> Wachtwoord </Label>
						<Input 
							id="password" 
							type="password" 
							v-model="password" 
							@input="emit('clearError')"
							class="col-span-3" 
						/>
					</div>
				</div>
			</form>
			<DialogFooter>
				<Button type="submit" form="login"> Inloggen </Button>
			</DialogFooter>
		</DialogContent>
	</Dialog>
</template>
