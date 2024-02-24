import UserCard from "../_components/user-card/user-card";
import Layout from "../page";

export default function Saved({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="inline-flex justify-center flex-wrap w-max">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </Layout>
  );
}
