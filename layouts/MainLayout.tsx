import { Nav } from "@/components/Nav/Nav";

type MainProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainProps) => {
  return (
    <section id="main-layout">
      <Nav />
      <div>{children}</div>
    </section>
  );
};

export default MainLayout;
