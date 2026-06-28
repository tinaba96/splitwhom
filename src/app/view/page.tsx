import type { Metadata } from "next";
import ShareView from "@/components/ShareView";

// Shared splits carry private data in the URL — keep this page out of search.
export const metadata: Metadata = {
  title: "Shared split · SplitWhom",
  robots: { index: false, follow: false },
};

export default function ViewPage() {
  return <ShareView />;
}
