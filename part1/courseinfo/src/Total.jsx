import Content from "./Content"
import Header from "./Header"

const Total=(total) => {
  return (
    <>
      <Header course={total.course} />
      <Content
        part1={total.part1}
        exercises1={total.exercises1}
        part2={total.part2}
        exercises2={total.exercises2}
        part3={total.part3}
        exercises3={total.exercises3}
      />
    </>
  );
}

export default Total