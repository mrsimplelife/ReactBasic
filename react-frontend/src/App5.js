import { Component, useCallback, useEffect, useState } from "react";

export class AppClass extends Component {
  state = {
    value1: 0,
    value2: 0,
  };

  onClick = () => {
    this.setState({ value1: 10 });
  };

  componentDidMount() {
    console.log("mount");
  }

  render() {
    const { value1 } = this.state;
    return (
      <div>
        Hello AppClass
        <hr />
        {value1}
        <button onClick={this.onClick}>button</button>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}
function PostDetailComponent({ post }) {
  const { title, content } = post;
  return (
    <div>
      <h1>{title}</h1>
      {content}
    </div>
  );
}
function PostDetail({ postId }) {
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState();
  const [post, setPost] = useState();
  useEffect(() => {
    console.log("changed postId :", postId);
    setTimeout(() => {
      setPost({ title: "포스팅 제목", content: `포스팅 내용 ... : ${postId}` });
    }, 1000);
  }, [postId]);
  return (
    <div>
      <h1>Post #{postId}</h1>
      {!post && "로딩 중 ..."}
      {post && <PostDetailComponent post={post} />}
    </div>
  );
}

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>현재시각은 {date.toISOString().slice(11, 19)}입니다.</div>;
}
function App() {
  //   const [value1, setValue1] = useState(0);
  //   const [value2, setValue2] = useState(0);
  const [value, setValue] = useState({ value1: 0, value2: 0 });
  const [postId, setPostId] = useState(0);

  const onClick = useCallback(() => {
    // setValue({ value1: 10, value2: 0 });
    setValue((prev) => ({ ...prev, value1: 10 }));
  }, []);

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    console.log(value);
  }, [value]);

  const { value1 } = value;
  return (
    <div>
      Hello App
      <hr />
      {value1}
      <button onClick={onClick}>button</button>
      {JSON.stringify(value)}
      <hr />
      <button onClick={() => setPostId(100)}>100번 글 보기</button>
      <PostDetail postId={postId} />
      <Clock />
    </div>
  );
}

export default App;
