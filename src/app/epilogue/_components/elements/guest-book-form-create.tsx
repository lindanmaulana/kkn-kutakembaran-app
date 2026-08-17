'use client';

import { ROLE_OPTIONS } from '@/app/epilogue/_data/role-options.data';
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Send } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { guestBookCreateSchema, TypeGuestBookCreateSchema } from '../../_schemas/guest-book.chema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ROLE_GUEST_BOOK } from '@/types/role-guest-book.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createGuestBooks } from '../../../../actions/guest-books.action';
import { toast } from '@/components/ui/toast';
import { errorHandler } from '@/lib/helpers/error-handler.helper';

export const GuestBookFormCreate = () => {
	const queryClient = useQueryClient();

	const form = useForm<TypeGuestBookCreateSchema>({
		resolver: zodResolver(guestBookCreateSchema),
		defaultValues: {
			name: '',
			role: ROLE_GUEST_BOOK.UMUM,
			message: '',
		},
	});

	const mutationCreate = useMutation({
		mutationKey: ['createGuestBooks'],
		mutationFn: (req: TypeGuestBookCreateSchema) => createGuestBooks(req),
	});

	const handleForm = form.handleSubmit((value: TypeGuestBookCreateSchema) => {
		toast.promise(mutationCreate.mutateAsync(value), {
			loading: 'Mengirim pesan kenangan...',
			success: () => {
				form.reset();
				queryClient.invalidateQueries({ queryKey: ['getAllGuestBooks'] });
				return 'Pesan berhasil dikirim. Terima kasih telah mengisi buku tamu!';
			},
			error: (err) => {
				const message = errorHandler(err);
				return message || 'Gagal mengirim pesan. Silakan coba lagi.';
			},
		});
	});

	return (
		<form className="space-y-5" onSubmit={handleForm}>
			<FieldGroup>
				<Controller
					name="name"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field className="space-y-2">
							<FieldLabel htmlFor="name" className="text-xs font-medium text-slate-300">
								Nama Lengkap / Instansi
							</FieldLabel>
							<Input
								{...field}
								id="name"
								aria-invalid={fieldState.invalid}
								type="text"
								required
								placeholder="Misal: Bp. Maman (Tokoh Masyarakat) / Rina"
								className="h-11 rounded-xl bg-black/60 border-white/10 text-slate-100 placeholder:text-slate-600 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors"
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</FieldGroup>

			<FieldGroup>
				<Controller
					name="role"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field className="space-y-2">
							<FieldLabel className="text-xs font-medium text-slate-300">Peran / Kategori</FieldLabel>
							<Select name={field.name} value={field.value} onValueChange={field.onChange}>
								<SelectTrigger
									aria-invalid={fieldState.invalid}
									className="h-11 rounded-xl bg-black/60 border-white/10 text-slate-100 placeholder:text-slate-600 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors py-5"
								>
									<SelectValue placeholder="Pilih peran atau kategori..." />
								</SelectTrigger>

								<SelectContent className="bg-[#0b0f19] border-white/10 text-slate-200">
									<SelectGroup>
										{ROLE_OPTIONS.map((item) => (
											<SelectItem
												key={item.value}
												value={item.value}
												className="focus:bg-white/10 focus:text-white cursor-pointer py-2.5"
											>
												{item.label}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>

							{fieldState.error && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</FieldGroup>

			<FieldGroup>
				<Controller
					name="message"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field className="space-y-2">
							<FieldLabel htmlFor="message" className="text-xs font-medium text-slate-300">
								Pesan & Kesan
							</FieldLabel>
							<Textarea
								{...field}
								id="message"
								aria-invalid={fieldState.invalid}
								rows={4}
								required
								placeholder="Tuliskan harapan atau pesan perpisahan di sini..."
								className="rounded-xl bg-black/60 border-white/10 text-slate-100 placeholder:text-slate-600 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors resize-none"
							/>

							{fieldState.error && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</FieldGroup>

			<Button
				type="submit"
				disabled={mutationCreate.isPending}
				className="w-full h-11 bg-amber-800 cursor-pointer hover:bg-amber-500 text-white font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20 transition-all duration-200 mt-2"
			>
				{mutationCreate.isPending ? (
					<>
						<Loader2 className="size-4 animate-spin" />
						<span>Mengirim...</span>
					</>
				) : (
					<>
						<Send className="size-4" />
						<span>Kirim Pesan Kenangan</span>
					</>
				)}
			</Button>
		</form>
	);
};
