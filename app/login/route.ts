import { getJWT } from "@/lib/utils";
import * as db from "@/lib/db";

const appUrl = `${process.env.DOMAIN}/signin?token=`;
db.createTable();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  if (!url) {
    return new Response("Url query param required", {
      status: 400,
    });
  }
  return Response.redirect(appUrl + (await getJWT(url)));
}
