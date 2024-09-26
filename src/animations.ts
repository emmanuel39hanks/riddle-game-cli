import { createSpinner } from "nanospinner";

export async function showSpinner(message: string, success: boolean) {
  const spinner = createSpinner(message).start();
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (success) {
    spinner.success({ text: "Correct answer!" });
  } else {
    spinner.error({ text: "Oops! Wrong answer." });
  }
}
