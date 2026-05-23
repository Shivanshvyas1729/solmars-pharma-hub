import { ZodError } from "zod";

export function formatZodErrors(error: ZodError): string {
  const issues = error.issues;
  return issues
    .map((issue) => {
      const path = issue.path.join(".");
      return `${path ? path + ": " : ""}${issue.message}`;
    })
    .join("\n");
}
