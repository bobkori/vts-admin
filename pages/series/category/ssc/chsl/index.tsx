import React from "react";
import { useRouter } from "next/router";
import css from "@/styles/grid.module.scss";
import Button from "@/components/button";

const CategorySSC = ({ data }: any) => {
  const { push } = useRouter();
  return (
    <div className={css["container"]}>
      <div className={css["prooutbox"]}>
        <div className={css["details"]}>
          <h2>CHSL Test Series</h2>
          <p>Available test series </p>
        </div>
        <div>
          <Button onClick={() => push(`/series/category/ssc/chsl/create`)}>
            Create New Series
          </Button>
        </div>
        <div>
          {data && (
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
              }}
            >
              {data.map((item: any, index: number) => {
                console.log(item?.sections?.length);
                return (
                  <li key={index}>
                    <p>ID : {item._id}</p>
                    <p>{item.title}</p>
                    <p>Section : {item?.sections?.length}</p>
                    <div>
                      <Button
                        onClick={() =>
                          push(
                            `/series/category/ssc/chsl/create/section?series_id=${item._id}`
                          )
                        }
                      >
                        Create Question Section
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        {/* <GridWraper>
          {tiers?.map((data, index) => {
            return (
              <GridItem
                key={index}
                name={data.name as string}
                onSelect={() => push(`/series/category/ssc/chsl/create`)}
              />
            );
          })}
        </GridWraper> */}
      </div>
    </div>
  );
};
export default CategorySSC;

export const getServerSideProps = async () => {
  const response = await fetch(`http://localhost:4000/api/v1/series`);
  const data = await response.json();
  console.log({ serverData: data });
  return {
    props: {
      data,
    },
  };
};
