import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import CreateSeries from "@/components/series/create";
import PerPageLayout from "@/layout/perpage";

const course = ["ssc", "cgl"];

const TestSeriesHome = () => {
  const router = useRouter();
  const onSubmitData = React.useCallback(
    async (state: any) => {
      console.log({ state });
      try {
        const { status } = await axios({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/series`,
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
export default TestSeriesHome;

TestSeriesHome.perpage = PerPageLayout;
