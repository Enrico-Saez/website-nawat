export const prerender = false;

export const POST = async ({ cookies }) => {
    cookies.delete('session', { path: '/' });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  };
  