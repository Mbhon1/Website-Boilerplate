import Link from "next/link";
import MainLayout from "@/layouts/MainLayout";
import PageTrans from "@/components/PageTrans";

const Welcome = () => {
  return (
    <MainLayout>
      <PageTrans width="fit-content">
        <div className="text-3xl font-extrabold">Hello World</div>
      </PageTrans>
    </MainLayout>
  );
};

export default Welcome;
