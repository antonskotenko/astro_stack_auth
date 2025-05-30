import { StackClientApp } from "@stackframe/js";

export const stackClientApp = new StackClientApp({
//   baseUrl: import.meta.env.VITE_STACK_API_URL,
  projectId: 'a3d4c013-391a-4991-8cb8-049ae66344a2',
  publishableClientKey: 'pck_vmy91snsceh4ngyn4s2ty0hjbmn9ndbdrssc2pq5qfp50',
  tokenStore: "cookie",
  urls: {
    oauthCallback: window.location.origin + "/oauth",
  },
}); 