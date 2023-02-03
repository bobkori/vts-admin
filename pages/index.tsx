import Head from "next/head";
import Button from "@/components/button";
import Styles from "@/styles/header.module.scss";
import Input from "@/components/inputs";
import { CreateSeriesContext } from "@/context/create-series";
import React from "react";

function Home() {
  const { state, onChangeValues, onAddQuestion, onDeleteQuestion } =
    React.useContext(CreateSeriesContext);

  console.log(state);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Styles.vtslayoutmain}>
        <div className="vtsLayoutcontent">
          <div className={Styles.vtsLayoutbody}>
            <div className="row">
              <div className="col-lg-4">
                <Input label="Hello" />
              </div>
              <div className="col-lg-4">
                <Input label="Hello" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className={`${Styles.textarea} ${Styles.inputfrom}`}>
                  <label htmlFor="Textarea">Textarea</label>
                  <textarea name="Textarea" id="Textarea"></textarea>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className={`${Styles.checkboxdes} ${Styles.inputfrom}`}>
                  <input type="checkbox" name="checkboxdes" id="abc" />
                  <label htmlFor="abc">
                    Generally you could be doing something like this:
                  </label>
                </div>
              </div>

              <div className="col-lg-4">
                <div className={`${Styles.checkboxdes} ${Styles.inputfrom}`}>
                  <input type="checkbox" name="checkboxdes" id="abc2" />
                  <label htmlFor="abc2">
                    Generally you could be doing something like this:
                  </label>
                </div>
              </div>

              <div className="col-lg-4">
                <div className={`${Styles.checkboxdes} ${Styles.inputfrom}`}>
                  <input type="checkbox" name="checkboxdes" id="abc3" />
                  <label htmlFor="abc3">
                    Generally you could be doing something like this:
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className={`${Styles.radiobtn} ${Styles.inputfrom}`}>
                  <input type="radio" name="radio" id="abg1" />
                  <label htmlFor="abg1">
                    Generally you could be doing something like this:
                  </label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={`${Styles.radiobtn} ${Styles.inputfrom}`}>
                  <input type="radio" name="radio" id="abg2" />
                  <label htmlFor="abg2">
                    Generally you could be doing something like this:
                  </label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={`${Styles.radiobtn} ${Styles.inputfrom}`}>
                  <input type="radio" name="radio" id="abg3" />
                  <label htmlFor="abg3">
                    Generally you could be doing something like this:
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <Button onClick={() => onChangeValues("time", new Date())}>
                  Change Time
                </Button>{" "}
              </div>
              <div className="col-lg-3">
                <Button onClick={() => onChangeValues("slug", "hello-world")}>
                  Change Slug
                </Button>{" "}
              </div>
              <div className="col-lg-3">
                <Button theme="primary">Add</Button>
              </div>
              <div className="col-lg-3">
                <Button theme="secondry"> Button </Button>
              </div>
              <div className="col-lg-3">
                <Button theme="tertiary"> Button </Button>
              </div>

              <Button onClick={onAddQuestion}>Add</Button>

              {state?.questions.map((item, index) => (
                <Button key={index} onClick={() => onDeleteQuestion(item.uuid)}>
                  Delete {item.uuid}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
