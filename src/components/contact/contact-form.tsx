"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL } from "@/lib/site";
import { cn } from "@/lib/utils";

const topics = [
  { value: "general", label: "Just saying hi / general chaos" },
  { value: "b2b", label: "Feed my restaurant / hotel" },
  { value: "box", label: "Ela Box — send the greens" },
  { value: "press", label: "Press, pics, or podcast" },
  { value: "careers", label: "I want in (careers)" },
] as const;

const schema = z.object({
  name: z.string().min(1, "We need a name — any nickname works"),
  email: z.string().email("That email looks hungry — try again?"),
  phone: z.string().optional(),
  organisation: z.string().optional(),
  topic: z.enum(["general", "b2b", "box", "press", "careers"]),
  message: z.string().min(10, "Give us at least a sentence — we read everything."),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organisation: "",
      topic: "general",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const topicLabel = topics.find((t) => t.value === data.topic)?.label ?? data.topic;
    const subject = encodeURIComponent(`[${topicLabel}] Hi from ${data.name}`);
    const body = encodeURIComponent(
      `${data.message}\n\n—\nTopic: ${topicLabel}\n${data.name}\n${data.email}${data.phone ? `\n${data.phone}` : ""}${data.organisation ? `\n${data.organisation}` : ""}`,
    );
    const href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.rel = "noopener noreferrer";
    anchor.click();
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl border border-border bg-card/80 p-6 shadow-lg backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div className="space-y-2">
        <Label htmlFor="topic">What is this about?</Label>
        <select
          id="topic"
          className={cn(
            "flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          )}
          {...register("topic")}
        >
          {topics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="organisation">Kitchen, brand, or chaos unit (optional)</Label>
          <Input id="organisation" {...register("organisation")} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">The message</Label>
        <Textarea
          id="message"
          rows={6}
          className="min-h-[150px] resize-y"
          placeholder="Tell us what you need, your wildest salad dreams, or your delivery window..."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full rounded-full sm:w-auto sm:px-10">
        Launch email draft
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Opens your mail app to {CONTACT_EMAIL} — we do not store messages on this site. Prefer WhatsApp? Tap the card
        above.
      </p>
    </motion.form>
  );
}
