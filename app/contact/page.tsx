import { compileWelcomeTemplate, sendMail } from "@/lib/mail";

export default function Contact() {
  const send = async () => {
    "use server";
    await sendMail({
      to: "sakuradev23@gmail.com",
      name: "Vahid",
      subject: "Test Mail",
      body: compileWelcomeTemplate("Vahid", "youtube.com/@sakuradev"),
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <form>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" formAction={send}>test</button>
      </form>
    </main>
  );
}