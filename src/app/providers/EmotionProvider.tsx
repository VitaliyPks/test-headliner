import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { PropsWithChildren } from "react";

const cache = createCache({ key: "css", prepend: true });

export const EmotionProvider = ({ children }: PropsWithChildren) => (
  <CacheProvider value={cache}>{children}</CacheProvider>
);
