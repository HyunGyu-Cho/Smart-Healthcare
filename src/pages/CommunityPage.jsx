
// src/pages/CommunityPage.jsx
import Layout from '../components/Layout';
import Card from '../components/Card';

export default function CommunityPage() {
  const posts = [1, 2, 3, 4];
  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(id => (
          <Card key={id} title={`커뮤니티 게시글 ${id}`}><div className="text-gray-700">게시글 내용 등</div></Card>
        ))}
      </div>
    </Layout>
  );
}