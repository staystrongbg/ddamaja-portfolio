import { PostProvider } from "../context/postContext";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PostProvider>{children}</PostProvider>;
}
