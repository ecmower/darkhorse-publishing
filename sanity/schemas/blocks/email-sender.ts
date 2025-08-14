import { defineField, defineType } from "sanity";
import { Mail } from "lucide-react";

export default defineType({
  name: "email-sender",
  title: "Email Sender",
  type: "object",
  icon: Mail,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Title for the email sender section",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "Description of what emails will be sent",
    }),
    defineField({
      name: "emailType",
      type: "string",
      title: "Email Type",
      options: {
        list: [
          { title: "Newsletter", value: "newsletter" },
          { title: "Welcome Email", value: "welcome" },
          { title: "Announcement", value: "announcement" },
          { title: "Custom", value: "custom" },
        ],
        layout: "radio",
      },
      initialValue: "newsletter",
    }),
    defineField({
      name: "subject",
      type: "string",
      title: "Email Subject",
      description: "Subject line for the email",
    }),
    defineField({
      name: "content",
      type: "text",
      title: "Email Content",
      description: "Content of the email to send",
    }),
    defineField({
      name: "recipients",
      type: "array",
      title: "Recipients",
      of: [{ type: "string" }],
      description: "List of email addresses to send to",
    }),
    defineField({
      name: "sendButtonText",
      type: "string",
      title: "Send Button Text",
      initialValue: "Send Email",
    }),
  ],
  preview: {
    select: {
      title: "title",
      emailType: "emailType",
      subject: "subject",
    },
    prepare({ title, emailType, subject }) {
      return {
        title: title || "Email Sender",
        subtitle: `${emailType} - ${subject || "No subject"}`,
      };
    },
  },
});
