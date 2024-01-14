import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTags from "./RenderTags";

const hotQuestions = [
  {
    _id: "1",
    title: "Adapting to New Learning Environments",
  },
  {
    _id: "2",
    title: "Community Engagement and Student Involvement",
  },
  {
    _id: "3",
    title: "Success Stories and Achievements",
  },
];
const popularTags = [
  { _id: "1", name: "javascripts", totalQuestions: 5 },
  { _id: "2", name: "react", totalQuestions: 7 },
  // { _id: "3", name: "nextjs", totalQuestions: 8 },
  // { _id: "4", name: "django", totalQuestions: 5 },
];
const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px]  flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden ">
      <div>
        <h3 className="h3-bold text-dark200_light900">Recent Discussions</h3>
        <div className="mt-7 w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-8 py-2 "
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTags
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
