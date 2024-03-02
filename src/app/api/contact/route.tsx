export async function POST(request: Request) {
    try {
      const text = await request.text()
      // Process the webhook payload
      console.log("TExt ", text);
    } catch (error) {
      return new Response(`Webhook error: ${error.message}`, {
        status: 400,
      })
    }
    const myBlob = new Blob();
    const myOptions = { status: 200, statusText: "SuperSmashingGreat!" };
    return new Response(myBlob, JSON.stringify(myOptions))
  }