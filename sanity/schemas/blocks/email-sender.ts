import { defineField, defineType } from "sanity";
import { Mail } from "lucide-react";

export default defineType({
  name: "email-sender",
  title: "Email Campaign Manager",
  type: "object",
  icon: Mail,
  description: "Manage and send email campaigns from Sanity Studio",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Campaign Title",
      description: "Name for this email campaign",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Campaign Description",
      description: "Description of what this email campaign is about",
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
          { title: "Product Update", value: "product" },
          { title: "Event Invitation", value: "event" },
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
      validation: (rule) => rule.required().min(5).max(100),
    }),
    defineField({
      name: "content",
      type: "text",
      title: "Email Content",
      description: "Content of the email to send",
      validation: (rule) => rule.required().min(10),
      rows: 8,
    }),
    defineField({
      name: "recipients",
      type: "array",
      title: "Recipients",
      description: "List of email addresses to send to",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "sendButtonText",
      type: "string",
      title: "Send Button Text",
      initialValue: "Send Campaign",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      type: "string",
      title: "Campaign Status",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Ready to Send", value: "ready" },
          { title: "Sending", value: "sending" },
          { title: "Sent", value: "sent" },
          { title: "Failed", value: "failed" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
      readOnly: true,
    }),
    defineField({
      name: "sentAt",
      type: "datetime",
      title: "Sent At",
      description: "When the email campaign was sent",
      readOnly: true,
    }),
    defineField({
      name: "sentBy",
      type: "string",
      title: "Sent By",
      description: "Who sent the email campaign",
      readOnly: true,
    }),
    defineField({
      name: "recipientCount",
      type: "number",
      title: "Recipient Count",
      description: "Number of emails sent",
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      emailType: "emailType",
      status: "status",
      recipientCount: "recipientCount",
    },
    prepare({ title, emailType, status, recipientCount }) {
      return {
        title: title || "Email Campaign",
        subtitle: `${emailType} - ${status}${recipientCount ? ` (${recipientCount} recipients)` : ""}`,
      };
    },
  },
});
