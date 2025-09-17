import Part from "./Part"

const Content = (content) => {
  return (
    <>
      <Part part={content.part1} exercises={content.exercises1} />

      <Part part={content.part2} exercises={content.exercises2} />

      <Part part={content.part3} exercises={content.exercises3} />

      <p>
        Number of exercises{" "}
        {content.exercises1 + content.exercises2 + content.exercises3}
      </p>
    </>
  );
}

export default Content

