import { parse } from "query-string";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
const navActiveStyle = {
  fontWeight: "bold",
  backgroundColor: "yellow",
};
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>App11</h1>
        <ul>
          <li>
            <NavLink exact activeStyle={navActiveStyle} to="/about">
              AboutPage
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={navActiveStyle} to="/about/company">
              AboutCompanyPage
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={navActiveStyle} to="/profile">
              ProfilePage
            </NavLink>
          </li>
          <li>
            <NavLink to="/weblog/" activeStyle={navActiveStyle}>
              blog
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/about/" component={AboutPage} />
          <Route exact path="/about/company/" component={AboutCompanyPage} />
          <Route exact path="/profile/" component={ProfilePage} />
          <Route path="/weblog/:post_id/" component={PostDetail} />
          <Route path="/weblog/" component={PostList} />
          <Route component={RouteNoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
const RouteNoMatch = ({ location }) => {
  return <div>잘못된 경로로 접근하셨습니다. ({location.pathname})</div>;
};
export default App;
const AboutPage = () => (
  <div>
    <h2>AboutPage</h2>
  </div>
);
const AboutCompanyPage = () => (
  <div>
    <h2>AboutCompanyPage</h2>
  </div>
);
const ProfilePage = ({ location }) => {
  const { token } = parse(location.search);
  return (
    <div>
      <h2>ProfilePage</h2>
      token:{token}
      {/* {JSON.stringify(location)} */}
      <hr />
      {/* {JSON.stringify(parse(location.search))} */}
    </div>
  );
};

const PostList = (props) => {
  const { match, location, history } = props;
  return (
    <div>
      <h2>PostList</h2>
      {JSON.stringify(props)}
      <hr />
      {JSON.stringify(match)}
      <hr />
      {JSON.stringify(location)}
      <hr />
      {JSON.stringify(history)}
      <ul>
        <li>
          <Link to={`${match.path}100/`}>100번 포스팅</Link>
        </li>
        <li>
          <Link to={`${match.path}101/`}>101번 포스팅</Link>
        </li>
      </ul>
    </div>
  );
};
const PostDetail = ({ match }) => {
  const [post, setPost] = useState();
  const {
    params: { post_id },
  } = match;
  useEffect(() => {
    console.log(`get post detail api 호출 : ${post_id}`);
    setPost({ title: `포스팅 ${post_id}`, content: `포스팅 ${post_id} 내용` });
  }, [post_id]);

  return (
    <div>
      <h2>PostDetail #{post_id}</h2>
      {JSON.stringify(match)}
      <hr />
      {JSON.stringify(post)}
    </div>
  );
};
