"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { postBlog } from "@/lib/blogApi";
import { FormSchema, FormSchemaType } from "@/lib/validationSchema/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function BlogForm({
  title,
  content,
}: {
  title?: string;
  content?: string;
}) {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: title ?? "",
      content: content ?? "",
    },
  });

  async function onSubmit(data: FormSchemaType) {
    await postBlog(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Button type="submit" className="w-full">
          {!title ? "記事投稿" : "記事編集"}
        </Button>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full flex break-words gap-4">
                  <Input
                    placeholder="title"
                    {...field}
                    className="text-lg font-medium leading-relaxed lg:w-1/2"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">
                      {form.getValues().title}
                    </h1>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full flex break-words gap-4">
                  <Textarea
                    placeholder="content"
                    {...field}
                    className="text-lg font-medium leading-relaxed resize-none h-screen lg:w-1/2"
                  />
                  <div className="overflow-y-auto lg:w-1/2 lg:block hidden">
                    {form.getValues().content}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
