import PostsListByTag from "@/components/PostListByTag";
import { SiteHeader } from "@/components/SiteHeader";

export default function TagPage() {
  return (
    <div>
      <SiteHeader />
      <PostsListByTag />
    </div>
  );
}
