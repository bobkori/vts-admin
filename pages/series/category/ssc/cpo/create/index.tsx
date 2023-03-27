import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import CreateSeries from "@/components/series/create";
import PerPageLayout from "@/layout/perpage";

const course = ["ssc", "cpo"];

const Page = () => {
  const router = useRouter();
  const onSubmitData = React.useCallback(
    async (state: any) => {
      try {
        const { data, status } = await axios({
          url: "http://localhost:4000/api/v1/series",
          method: "post",
          data: state,
        });
        if (status === 200) {
          router.back();
          alert(`Series created Successfully`);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [router]
  );

  return (
    <CreateSeries course={course} onSubmit={(value) => onSubmitData(value)} />
  );
};
export default Page;

Page.perpage = PerPageLayout;
