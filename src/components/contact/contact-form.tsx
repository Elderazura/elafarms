"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  organisation: z.string().optional(),
  message: z.string().min(10, "Please add a bit more detail (at least 10 characters)"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", organisation: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`Ela inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `${data.message}\n\n—\n${data.name}\n${data.email}${data.organisation ? `\n${data.organisation}` : ""}`,
    );
    const href = `mailto:hello@theela.farm?subject=${subject}&body=${body}`;
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.rel = "noopener noreferrer";
    anchor.click();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="organisation">Organisation (optional)</Label>
        <Input id="organisation" {...register("organisation")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={6}
          className="min-h-[140px] resize-y"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        Open email draft
      </Button>
      <p className="text-xs text-muted-foreground">
        Submits through your email client to hello@theela.farm — no message is stored on this demo site.
      </p>
    </form>
  );
}
