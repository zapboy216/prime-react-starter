import { HeadlessListInferencer } from "@refinedev/inferencer/headless";
import { GetServerSideProps } from "next";

export default function BlogPostList() {
  return <HeadlessListInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
