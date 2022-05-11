import { NextRequest, NextResponse } from "next/server";
import differentListing from "../../../config/remoteConfig";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  console.log("path url", url);
  // Redirect paths that go directly to the variant
  if (!url.pathname.match(/^(.*?)c\/\d+$/)) {
    url.pathname = 'url'
    return NextResponse.redirect(url)
  }
  const flagName = `flag-${differentListing['newDesktopListing']}`;
  const cookie = req.cookies[flagName] || differentListing.enabled ? "1" : "0";

  url.pathname = cookie === "-1" ? `${url.pathname}/expr` : url.pathname;

  const res = NextResponse.rewrite(url);
  console.log(url.pathname, url);
  // Add the cookie if it's not there
  if (!req.cookies[flagName]) {
    res.cookie(flagName, cookie);
  }

  return res;
}
